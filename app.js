const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        diesc: 'Direccion de la cuidad para obtener el clima',
        demmand: true
    }
}).argv;

console.log(argv.direccion);