const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8cd351808821ae2dae2429c98a6bd076&units=metric`)

  return resp.data.main.temp;
}

module.exports = {
  getClima
}
