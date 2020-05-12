const pool = require('../db.js');
const { homicideQueries } = require('../queries');

//  get request example, json response
exports.allHomicides = (req, res) => {
    pool.query(
        // query
        homicideQueries.getAllHomicides,
        // arguments
        // [name],
        (error, results) => {
            if (error) {
                console.log('THERE WAS A PROBLEM:\n\n');
                throw error;
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(results.rows[0].row_to_json);
        })
};

