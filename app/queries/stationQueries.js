// Returns all records as geoJSON

// Returns rows as JSON
exports.getAllStations = `SELECT row_to_json(fc) FROM (
  -- Creates "TYPE" level
	SELECT 'FeatureCollection' As type,
    -- Returns arrays as JSON, creates "features" level
    array_to_json(array_agg(f)) As features
      FROM (
            -- Creates "Feature" level
		        SELECT 'Feature' As type,
              -- Returns geometry as GEOJSON "geometry" object or row as
              -- geoJSON "feature" object
              ST_AsGeoJSON(ST_AsText(
                  --Gets current geom, transforms into WGS84(4326), casts type
                  --as geometry type
                  ST_Transform(lg.geom, 4326)))::json As geometry,
                    -- Features to be included in the properties level of
                    -- geoJSON object
		                row_to_json(
							-- This subquery to cast the names of columns, so they are defined withing the geojson object "properties"
							-- Select properties to include within the nested SELECT below
							(SELECT l FROM (SELECT id, long_name ) AS l)) As properties
                      -- Target database for query
                      FROM public.nyc_subway_stations As lg
		              -- Any extra filtering of target database here, optional
 		              --  WHERE name LIKE '%' || $1 || '%'  
	     ) As f
) As fc`;

