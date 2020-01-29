'use strict';

const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'no secret',
  resave: false,
  saveUninitialized: true
}));

const { memberRoute } = require('./routes/member-route');

