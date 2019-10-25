const fs = require('fs')
const debug = require('debug')(`${process.env.name}:polygon-manager`)
const inside = require('point-in-polygon')


let polygonManager = {}
let polygons;
if (polygons === undefined) {
    fs.readFile(`${__dirname}/polygons.json`, (err, data) => {
        if (err) throw err
        polygons = JSON.parse(data)
        debug(`polygons initialized from ${__dirname}/polygons.json file`)
    })
}

polygonManager.addPolygon = function (poly) {
    debug('adding a polygon to in memory structure')
    polygons.features.push(poly)
    fs.writeFile(`${__dirname}/polygons.json`,JSON.stringify(polygons),(err)=>{
       if(err) throw err
       debug('new polygon added to polygons file') 
    })
}

polygonManager.checkPointInPolygon = function (lat, long) {
    debug(`checking point with coordinates (${lat},${long})`)
    let result = { polygons: [] };
    polygons.features.forEach(element => {
        if (inside([long, lat], element.geometry.coordinates[0])) {
            result.polygons.push(element.properties.name)
        }
    });
    return result;
}


module.exports = polygonManager;