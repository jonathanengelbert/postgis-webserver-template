const pool = require('../db.js');
const queries = require('../queries');

// get all comments
exports.getAllComments = (req, res) => {
    pool.query(
        // query
        queries.stationCommentsQueries.getAllComments,
        // arguments
        // [name],
        (error, results) => {
            if (error) {
                console.log('THERE WAS A PROBLEM:\n\n');
                throw error;
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(results.rows);
        })
};

// get single comment by ID
exports.getOneComment = (req, res) => {
  const stationId = req.query.stationId;
  if (stationId) {
    pool.query(
        // query
        queries.stationCommentsQueries.getOneComment,
        // arguments
        [stationId],
        (error, results) => {
            if (error) {
                console.log('THERE WAS A PROBLEM:\n\n');
                throw error;
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(results.rows);
        })
  } else {
      res.status(400);
    res.send('No station id was provided!');
  }
};

// post a comment
exports.postComment = (req, res) => {

  const { stationId = null, comment = null, author = null  } = req.body;

  if (stationId && comment && author) {
    pool.query(
        // query
        queries.stationCommentsQueries.postComment,
        // arguments
        [stationId, comment, author],
      
        (error, results) => {
            if (error) {
                console.log('THERE WAS A PROBLEM:\n\n');
                throw error;
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(results.rows);
        })
  } else {
      res.status(400);
    res.send('One or more parameters where invalid or not provided');
  }
};
