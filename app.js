'use strict';
const Routes = require("./routes/member-route")
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;
const user = require("./routes/user-route")

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use("/user",user);
app.use("/",Routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const { memberRoute } = require('./routes/member-route');

