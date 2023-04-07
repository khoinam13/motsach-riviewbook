const express = require('express');
const route = express.Router();
const DetailsController = require('../app/controllers/Details')
route.get('/create',DetailsController.create)
route.post('/store',DetailsController.store)
route.get('/:slug',DetailsController.show)
route.put('/:id',DetailsController.update)
route.delete('/:id',DetailsController.delete)
route.get('/:id/edit',DetailsController.edit)

module.exports = route