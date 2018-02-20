const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const _ = require('lodash');

const config = require('./server/config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log(`Connected to ${config.database}`);
});
mongoose.connection.on('error', err => {
  console.log(`Error: ${err}`);
});

const app = express();

const users = require('./server/routes/users');

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport')(passport);

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Pantry Pal</h1>');
});

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log(`Server at ${port} started.`);
});