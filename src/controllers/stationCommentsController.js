const pool = require('../db.js');
const queries = require('../queries');

// get all comments
exports.getAllComments = (req, res) => {
    pool.query(
        // query
        queries.stationCommentsQueries.getAllComments,
        (error, results) => {
            if (error) {
                res.status(400);
                res.send({
                    message: `An error has occurred: \n{error}`,
                    statusCode: '1'
                })
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(results.rows);
        })
};

// get comments by station ID
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
                    res.status(400);
                    res.send({
                      message: `An error has occurred: \n{error}`,
                      statusCode: '1'
                    })
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
    const {stationId = null, comment = null, author = null} = req.body;
    if (stationId && comment && author) {
        pool.query(
            // query
            queries.stationCommentsQueries.postComment,
            // arguments
            [stationId, comment, author],
            (error, results) => {
                if (error && error.code === '23505') {
                    res.status(400);
                    res.send({
                        message: 'User has already commented on this station',
                        statusCode: '23505'
                    });
                    return;

                }
                if (error) {
                    res.status(400);
                    res.send({
                        message: 'One or more parameters where invalid or not provided',
                        statusCode: '1'
                    });
                } else {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(200).json({
                        message: "Message Posted Successfully",
                        statusCode: '0'
                    });
                }
            })
    }
};

// update a comment from comment ID
exports.updateComment = (req, res) => {
    const {comment, commentId} = req.body;
    if (comment.length < 2) {
        res.send({
           message: 'Input is too short',
           statusCode: '1'
        });
        return;
    }
    if (commentId) {
        pool.query(
            // query
            queries.stationCommentsQueries.updateComment,
            // arguments
            [comment, commentId],
            (error, results) => {
                if (error) {
                    res.status(400);
                    res.send({
                        message: 'An error has occured',
                        statusCode: '1'
                    })
                    return;
                }
                res.header("Access-Control-Allow-Origin", "*");
                res.status(200).json({
                    message: 'Comment Updated',
                    statusCode: '0'
                });
            })
    } else {
        res.status(400);
        res.send({
            message: 'No comment id was provided!',
            statusCode: '1'
        });
    }
};

// delete comment by comment ID
exports.deleteOneComment = (req, res) => {
    const {commentId} = req.body;
    if (commentId) {
        pool.query(
            // query
            queries.stationCommentsQueries.deleteOneComment,
            // arguments
            [ commentId],
            (error, results) => {
                if (error) {
                    res.status(400);
                    res.send({
                        message: 'An error has occured',
                        statusCode: '1'
                    })
                        return;
                }
                res.header("Access-Control-Allow-Origin", "*");
                res.status(200).json({
                    message: 'Comment Deleted',
                    statusCode: '0'
                });
            })
    } else {
        res.status(400);
        res.send({
            message: 'No comment id was provided!',
            statusCode: '1'
        });
    }
};
