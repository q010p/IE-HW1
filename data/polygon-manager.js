const fs = require('fs')
const debug = require('debug')(`${process.env.name}:polygon-manager`)


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
    console.log(polygons)
}


module.exports = polygonManager;