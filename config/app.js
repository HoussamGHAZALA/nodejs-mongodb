const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('../routes/routes');
const mongoose = require('mongoose');
const pwd = encodeURIComponent("am-automobile$_2018");
let dev_db_url = `mongodb://houssem.ghazala:${pwd}@ds119795.mlab.com:19795/am-automobile`;

const app = express();

// Set up mongoose connection
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

module.exports = app;
