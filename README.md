# IE-HW1 [![Build Status](https://travis-ci.com/q010p/IE-HW1.svg?branch=master)](https://travis-ci.com/q010p/IE-HW1/)

This is First assignment of Internet Engineering

## General Description

this application consists of two restfull api endpoints
* apis under /api/gis:
    - /api/gis/addpolygon PUT you can add some polygons to server polygons
    - /api/gis/testpoint GET you can check that a point is inside the polygons that stored in server
* apis under /api/forms:
    - /api/forms GET get list of all forms
    - /api/forms/:id GET get a form by id

by default aplication polygons initialize with two polygons with names Tehran and Detroit that you can see in [polygons.json](https://github.com/q010p/IE-HW1/blob/master/data/polygons.json) file

## Getting Started

In order to run this project on your own local machine or server you should just install [node](https://nodejs.org/en/) and [npm](https://npmjs.com)
