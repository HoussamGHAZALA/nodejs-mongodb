const controller = require('../api/cars.controller');

const express = require('express');
const router = express.Router();

router.get('/cars', controller.findAllCars);

router.post('/car', controller.createCar);

module.exports = router;
