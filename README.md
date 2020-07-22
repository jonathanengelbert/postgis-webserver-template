# PostGIS Webserver Boiler Plate

Backend template for web GIS applications

## Table of Contents

* [Live Demo](#live-demo)
* [Installation](#installation)
* [What is the project for?](#what-is-the-project-for)
* [Motivation](#motivation)
* [Technologies](#technologies)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

### Live Demo

You can see this code in action with sample data from the NYC Open Data Portal and another [mapping framework I developed](https://github.com/jonathanengelbert/mapping-app-prototype) which stands up a React/Typescrypt/Mapbox frontend at:

https://crud-mapbox-example.jonathanengelbert.com/

### Installation

In the future, this module will be available as a npm package.
For now, clone repository and install locally using npm:

`$ git clone `https://github.com/jonathanengelbert/postgis-webserver-template
<br>
`$ cd  postgis-webserver-template && npm install`
<br>

- Edit .env.template to assign the values to all variables matching your
  environment and preferences

- Rename it .env and make sure to include .env in your .gitignore if starting a new repo,
specially if storing any API keys during development in this file.

Run `npm run dev`

### What is the project for?

This repository serves as a boiler plate for web gis applications that need a
postgreSQL/postGIS backend. It includes a few scripts that should help with
basic operations, such as persistent editing of attributes and location.

<br>
This repository includes:

* Node and express simple server

* Dependencies and boiler plate for postgres communication between Node.js and
  a Postgres database  

* Template .env file for portability

* Simple GET, POST, DELETE and UPDATE request templates for GIS-centric data

* Starter queries for most common operations, focused on returning ready to
  parse GeoJSON objects


### Motivation

Having a template for web GIS applications with an opinionated backend, but
flexible on the frontend. This plays nice with any frontend mapping API, but
heavily depends on a proper installation of PostgreSQL with PostGIS enabled.

### Technologies 

    - Cors: "^2.8.5",
    - Dotenv: "^8.2.0",
    - Express: "^4.17.1",
    - Nodemon: "^2.0.3",

And sub-dependencies of these modules

### Contributing

There are currently no set guidelines on how to contribute to this project, but contributions are welcome.
Please reach out to the author of this project directly at <jonathanengelbert@gmail.com>

### Authors

* Jonathan Engelbert

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

