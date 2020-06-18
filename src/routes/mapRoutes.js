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
router.get('/get-comments', stationCommentsController.getOneComment);
// post
router.post('/post-comment', stationCommentsController.postComment);
// update
router.put('/update-comment', stationCommentsController.updateComment);
// delete
router.delete('/delete-comment', stationCommentsController.deleteOneComment);

module.exports = router;
