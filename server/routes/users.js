const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/key');
const _ = require('lodash');
const { ObjectID } = require('mongodb');

const User = require('../models/user');

const authenticate = passport.authenticate('jwt', { session: false });

// Signup
router.post('/', (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);
  const newUser = new User(body);
  const existingUser = User.find({ username: body.username });

  newUser.save().then(() => {
    const user = newUser.toJSON();
    const token = newUser.generateToken();
    res.json({
      user,
      token
    });
  }).catch((e) => {
    res.status(400).send(e);
  });
});

router.post('/login', (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);

  User.findByCredentials(body.username, body.password).then(user => {
    const token = user.generateToken();

    res.json({
      user,
      token
    });
  }).catch(() => {
    res.status(401).json({
      errors: {
        validation: {
          message: 'Invalid username or password'          
        }
      }
    });
  });
});

router.get('/user', authenticate, (req, res) => {
  res.json({
    user: req.user
  });
});

router.get('/:id', authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send({
      message: 'ID not valid'
    });
  }

  User.findById(id).then(currentUser => {
    if(!currentUser) {
      return res.status(404).send();
    }

    res.send(currentUser.ingredients);
  }).catch(e => {
    res.status(400).send(e);
  });
});

router.patch('/:id', authenticate, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).json({
      message: 'ID not valid'
    });
  }

  User.findById(id).then(currentUser => {
    if (!currentUser) {
      return res.status(404).send({
        message: 'User error'
      });
    }

    // Guard to protect not-currentuser from manipulating data
    const auth = req.headers.authorization.slice(4);
    const verify = jwt.verify(auth, config.secret);

    if (id !== verify._id) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }

    currentUser.ingredients = req.body.ingredients;

    currentUser.save().then(updatedUser => {
      res.send(updatedUser.ingredients);
    });
  }).catch(e => {
    res.status(400).send(e);
  });
});

module.exports = router;