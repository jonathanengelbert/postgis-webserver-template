"use strict";

const express = require('express');
const router = express.Router();

// controllers 
const mapController = require('../controllers/mapController');

// get all stations
router.get('/geojson-all-stations', mapController.geojsonGetAll);

module.exports = router;
