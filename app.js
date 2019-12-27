const express = require('express');
const cors = require('cors')
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

var indexRouter = require('./routes/index')
var gisRouter = require('./routes/gis')
var formsRouter = require('./routes/forms')

app.use('/', indexRouter)
app.use('/api/gis', gisRouter)
app.use('/api/forms',formsRouter)

require('./data/polygon-manager')


module.exports = app;