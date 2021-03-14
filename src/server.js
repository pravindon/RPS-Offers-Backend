Promise = require('bluebird'); // eslint-disable-line no-global-assign
// const express = require('express');
// const helmet = require("helmet");
require('dotenv').config();
require("./config/connection");
const app = require('./config/express');
// const studentRouter = require("./api/controllers/student");

const mongoose = require('./config/mongoose');

// open mongoose connection
// mongoose.connect();

// const app = express();
// app.use(helmet());
// var cors = require('cors');
// const { Router } = require('express');
const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());
// app.use(studentRouter);

app.listen(port, (req, res) => {
    console.log(`Connection is start up on ${port}`);
})

module.exports = app;