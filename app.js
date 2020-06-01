const place = require('./place/place');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        diesc: 'Direccion de la cuidad para obtener el clima',
        demmand: true
    }
}).argv;


 place.getLugarLatLng( argv.direccion )
     .then( console.log );