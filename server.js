const dotenv = require('dotenv').config(); 
const express = require('express');
const app = express();
const cors = require('cors');
const { Pool, Client } = require('pg');
const fs = require('fs')

app.use(cors());

const port = process.env.APP_PORT;

// postgres connection

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT,
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM nyc_subway_stations ORDER BY name', (error, results) => {
      if(error) throw error;
      res.header("Access-Control-Allow-Origin", "*");
      console.log(results.rows);
      res.status(200).json(results.rows)
    })
};

const getGeoJsonFromServer = (req, res) => {
    pool.query(
      
   `SELECT row_to_json(fc) FROM (
	    SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (
		    SELECT 'Feature' As type, ST_AsGeoJSON(ST_AsText(ST_Transform(lg.geom,4326)))::json As geometry,
		      row_to_json((id, name )) As properties FROM public.nyc_subway_stations As lg
	    ) As f
   ) As fc`   

      ,(error, results) => {
      if(error) throw error;
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).json(results.rows[0].row_to_json);
    })
};

// ROUTES/////////////////////////////////////////////////////////

// sends local json stored in data folder


// database request test
app.get('/all-users', getUsers);

// geojson request from database
app.get('/geojson-from-database', getGeoJsonFromServer );


//////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});
