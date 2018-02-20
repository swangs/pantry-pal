const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');

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

router.get('/profile', authenticate, (req, res) => {
  res.json({
    user: req.user
  });

});


module.exports = router;