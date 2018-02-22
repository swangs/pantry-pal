const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const _ = require('lodash');
const { ObjectID } = require('mongodb');

const User = require('../models/user');

const authenticate = passport.authenticate('jwt', { session: false });

// Signup
router.post('/', (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);
  const newUser = new User(body);
  const existingUser = User.find({ username: body.username });

  newUser.save().then(e => {
    const user = newUser.toJSON();
    const token = newUser.generateToken();
    console.log(e);
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
      msg: 'Invalid username or password'
    });
  });
});


router.get('/:id', authenticate, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({
      msg: 'ID not valid'
    });
  }

  User.findById(id).then(currentUser => {
    if(!currentUser) {
      return res.status(404).send();
    }


    res.send(currentUser);
  }).catch(e => {
    console.log(e);
    res.status(400).send(e);
  });
});

// Update user's ingredients array
router.patch('/:id', authenticate, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).json({
      msg: 'ID not valid'
    });
  }

  User.findById(id).then(currentUser => {
    if (!currentUser) {
      return res.status(404).send({
        msg: 'User error'
      });
    }

    // Guard to protect not-currentuser from manipulating data
    const auth = req.headers.authorization.slice(4);
    const verify = jwt.verify(auth, config.secret);

    if (id !== verify._id) {
      return res.status(401).json({
        msg: 'Unauthorized'
      });
    }

    currentUser.save().then(updatedUser => {
      res.send(updatedUser);
    });
  }).catch(e => {
    res.status(400).send(e);
  });
});

module.exports = router;