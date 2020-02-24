const axios = require('axios');
const getLugarLatLng = async(dir) => {
const encoderURL = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encoderURL}`,
    headers: {'x-rapidapi-key': '2809bd8b94msh4282c15a69e2cc1p1c6538jsn75776a4c160c'}
  });

  const resp = await instance.get();
  if(resp.data.Results.length === 0){
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

      return {
        direccion,
        lat,
        lng
      }
}

module.exports = {
  getLugarLatLng
}
