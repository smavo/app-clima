const axios = require('axios');

const getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=974c422775022bcbab154c5185c78663&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
