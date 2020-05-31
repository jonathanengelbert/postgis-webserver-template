// Returns all records of tabular data
exports.getAllComments = `SELECT * FROM public.station_comments`;

// Returns all records of tabular data
exports.getOneComment = `SELECT * FROM public.station_comments
  WHERE station_id = $1`;

