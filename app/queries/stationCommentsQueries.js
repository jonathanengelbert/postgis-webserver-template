// Returns all records of tabular data
exports.getAllComments = `SELECT * FROM public.station_comments`;

// Returns one record by id
exports.getOneComment = `SELECT * FROM public.station_comments
  WHERE station_id = $1`;

// posts a record 
exports.postComment = `INSERT INTO station_comments (station_id, comment, author) 
  VALUES ($1, $2, $3)`;

