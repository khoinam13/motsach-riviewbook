const express = require('express');
const route = express.Router();
const loginController = require('../app/controllers/LoginController');
route.post('/store',loginController.store);
route.get('/',loginController.index);
// route.get('/admin',loginController.admin)
// route.post('/storeAdmin',loginController.storeAdmin)
route.get('/out',loginController.out)
module.exports = route