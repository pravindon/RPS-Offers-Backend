Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');
// const express = require('express');
// const helmet = require("helmet");
require('dotenv').config();
require("./config/connection");
const app = require('./config/express');
// const studentRouter = require("./api/controllers/student");

const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

app.listen(port, (req, res) => {
    console.log(`Connection is start up on ${port} ${env}`);
})

module.exports = app;