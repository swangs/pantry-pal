const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config/database');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  }
});

// Instance methods
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'username']);
};

UserSchema.methods.generateToken = function () {
  const user = this;

  // 1 week expiration
  const token = jwt.sign({ _id: user._id }, config.secret, { expiresIn: 604800 });
  return `JWT ${token}`;
};

// "Class" methods
UserSchema.statics.findByCredentials = function(username, password) {
  const User = this;

  return User.findOne({ username }).then(user => {
    if (!user) {
      return Promise.reject(); // eslint-disable-line no-undef
    }

    return new Promise((resolve, reject) => { // eslint-disable-line no-undef
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

UserSchema.statics.getById = function(id) {
  const User = this;

  return User.findById(id).then(user => {
    if (!user) {
      return Promise.reject(); // eslint-disable-line no-undef
    }

    return user;
  });
};

// Reencrypts password if changed password / new password
UserSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (saltErr, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});


const User = mongoose.model('User', UserSchema);

module.exports = User;