// Module Dependencies
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// CORS options
var corsOptions = {
  origin: ['http://localhost:3000','https://hardyvalen.azurewebsites.net'],
  optionsSuccessStatus: 200,
  methods: "GET,POST",
}

// Connect to database
const sequelize = require("./db/connect");

// Express Program
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', require("./routes/index"));

module.exports = app;
