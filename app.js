const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        diesc: 'Direccion de la cuidad para obtener el clima',
        demmand: true
    }
}).argv;


//place.getLugarLatLng(argv.direccion)
//    .then(console.log);

weather.getClima( 40.750000, -74.000000 )
         .then( console.log )
         .catch( console.log );


