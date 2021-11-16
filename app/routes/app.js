"use strict";

const express = require('express');
const appController = require('../controllers/app');

let app = express.Router();

let md_auth = require('../middleware/auth');

app.post('/auth/login', appController.login);

app.post('/uploadFile/:type/:group', appController.uploadFile);
app.get('/getFile/:type/:group/:filename', appController.getFile);


module.exports = app;