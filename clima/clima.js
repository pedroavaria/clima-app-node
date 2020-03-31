const axios = require('axios')


const getClima = async (lat,lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=df12c5f6cdab7b4c793bacc2dc931abd&units=metric`)

    return resp.data.main.temp

}

module.exports = {
    getClima
}