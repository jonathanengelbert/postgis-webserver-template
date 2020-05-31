"use strict";

const express = require('express');
const router = express.Router();

// controllers 
const { 
    stationController, 
    homicideController,
    neighborhoodController,
    stationCommentsController
} = require('../controllers');

//console.log(homicideController.allHomicides());

// geojson map layers routes 
router.get('/geojson-all-stations', stationController.geojsonGetAll);
router.get('/geojson-all-homicides', homicideController.allHomicides);
router.get('/geojson-all-neighborhoods', neighborhoodController.getAllNeighborhoods);
// tabular data
router.get('/all-station-comments', stationCommentsController.getAllComments);
router.get('/get-one-comment', stationCommentsController.getOneComment);

module.exports = router;
