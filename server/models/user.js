const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username cannot be blank'],
    maxlength: [12, 'Username cannot be greater than 12 characters'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password cannot be blank'],
    minlength: [6, 'Password cannot be less than 6 characters']
  },
  ingredients: {
    type: Array,
  }
});

UserSchema.plugin(uniqueValidator, { message: 'Username already exists' });

// Instance methods
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'username', 'ingredients']);
};

UserSchema.methods.generateToken = function () {
  const user = this;

  // 1 week expiration
  const token = jwt.sign(
    { _id: user._id }, 
    process.env.JWT_TOKEN || 'supersecret', 
    { expiresIn: 604800 }
  );
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