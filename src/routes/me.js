const express = require('express');
const route = express.Router();
const MeController = require('../app/controllers/Me')
route.get('/details',MeController.index)
module.exports = route