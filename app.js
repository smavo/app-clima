const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        diesc: 'Direccion de la cuidad para obtener el clima',
        demmand: true
    }
}).argv;

console.log(argv.direccion);

const encodedUlr = encodeURI( argv.direccion );
//console.log(encodedUlr);
    
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
    headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
  });

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error', err);
    })