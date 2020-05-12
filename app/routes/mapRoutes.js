"use strict";

const express = require('express');
const router = express.Router();

// controllers 
const { 
    stationController, 
    homicideController,
    neighborhoodController
} = require('../controllers');

//console.log(homicideController.allHomicides());

// get all stations
router.get('/geojson-all-stations', stationController.geojsonGetAll);
router.get('/geojson-all-homicides', homicideController.allHomicides);
router.get('/geojson-all-neighborhoods', neighborhoodController.getAllNeighborhoods);

module.exports = router;
