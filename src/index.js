"use strict";

const bodyParser = require('body-parser');
const dotenv = require('dotenv').config(); 
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs')

const port = process.env.APP_PORT;

// routers
const mapRouter = require('./routes/mapRoutes');

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(mapRouter);


app.listen(port, () => {
  console.log(`Listening on ${port}`)
});
