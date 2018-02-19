const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const config = require('../../config/database');
const User = require('../models/user');

const authenticate = passport.authenticate('jwt', {
  session: false
});

// Signup
router.post('/', (req, res) => {
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
    const access = 'auth';
    const token = jwt.sign({
      _id: user._id.toHexString(),
      access
    }, config.secret, {
      expiresIn: 604800 // 1 week
    });

    res.json({
      user,
      token: `JWT ${token}`
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