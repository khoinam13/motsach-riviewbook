const express = require('express');
const route = express.Router();
const siteController = require('../app/controllers/SiteController');
route.get('/seach',siteController.seach);
route.get('/',siteController.index);
route.post('/',siteController.index);
module.exports = route