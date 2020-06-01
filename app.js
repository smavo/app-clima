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

//weather.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log);


const getInfo = async (direccion) => {

    try {
        const coords = await place.getLugarLatLng(direccion);
        console.log('Coordenadas:', coords);
        const temp = await weather.getClima(coords.lat, coords.lng);
        console.log('Temperatura del Lugar:',temp);
        console.log('=======================');
        return `El clima de ${coords.direccion} es de: ${temp} °C.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);