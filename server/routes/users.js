const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');

const User = require('../models/user');

router.post('/signup', (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);
  const user = new User(body);

  user.save().then(() => {
    res.send(user);
  }).catch(e => {
    res.status(400).send(e);
  });
});

router.post('/login', (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);

  User.findByCredentials(body.username, body.password).then(user => {
    res.send(user);
  }).catch(e => {
    res.status(401).send();
  });
});

router.get('/profile', (req, res) => {
  res.send('PROFILE');
});


module.exports = router;