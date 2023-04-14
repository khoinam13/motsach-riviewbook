const express = require('express');
const route = express.Router();
const authMiddleware = require('../middleware/auth-middleware')
const MeController = require('../app/controllers/Me')
route.get('/details', MeController.index)
module.exports = route