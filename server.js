const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const _ = require('lodash');

const config = require('./config/database');

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

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Test</h1>');
});

app.use('/users', users);

// Start Server
app.listen(port, () => { 
  console.log(`Server at ${port} started.`); 
});