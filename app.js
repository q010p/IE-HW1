const express = require('express');
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

var indexRouter = require('./routes/index')
var gisRouter = require('./routes/gis')

app.use('/gis', gisRouter)
app.use('/', indexRouter)

const polygonManager = require('./data/polygon-manager')


module.exports = app;