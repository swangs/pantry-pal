const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
const { ObjectID } = require('mongodb');

const User = require('../models/user');

const authenticate = passport.authenticate('jwt', { session: false });

// Signup
router.post('/', (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);
  const newUser = new User(body);

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
      msg: 'Invalid username or password'
    });
  });
});

router.post('/recipes', (req, res) => {
  const recipe = _.pick(req.body.recipe, ['name']);
  const user = _.pick(req.body.user, ['_id']);
  console.log(req);

  User.findById(ObjectID(req.body.user._id)).then(founduser => {
    console.log(founduser);
    founduser.ingredients.push(recipe);

    founduser.save().then(newuser => {
      res.json(newuser);
    }).catch(e => {
      res.status(400).json(e);
    });
  });
});

router.get('/user', authenticate, (req, res) => {
  res.json({
    user: req.user
  });

});


module.exports = router;