const express = require('express');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessions');
const ssr = require('../middleware/ssr');
const fileUpload = require('express-fileupload')

const serverConfig = (app) => {
  app.use(fileUpload({}))
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
};

module.exports = serverConfig;
