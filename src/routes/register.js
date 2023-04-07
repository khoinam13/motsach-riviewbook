const express = require('express');
const route = express.Router();
const registerController = require('../app/controllers/RegisterController');
route.post('/store',registerController.store);
route.get('/',registerController.index);

module.exports = route