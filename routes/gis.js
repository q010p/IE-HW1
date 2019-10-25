const express = require('express')
const router  = express.Router();
const debug = require('debug')(`${process.env.name}:gis`)
const polygonManager = require('../data/polygon-manager')


router.put('/addpolygon', function(req,res){
    debug('put request to /gis/addpolygon endpoint')
    polygonManager.addPolygon(req.body)
    res.sendStatus(200)
})

router.get('/testpoint',function(req,res){
    debug('get request to /gis/testpoint endpoint with below params :\nreq.query')
    res.send(polygonManager.checkPointInPolygon(req.query.lat,req.query.long))
})


module.exports = router;