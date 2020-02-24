const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias:'d',
    descripcion: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;



const getInfo = async (direccion) => {
  // lugar.getLugarLatLng(argv.direccion)
  //       .then(direccion => {
  //         const name = direccion.direccion;
  //         const lat = direccion.lat;
  //         const lon = direccion.lng;
  //         clima.getClima(lat, lon)
  //             .then(clima => {
  //               console.log(`El clima de ${name} es de ${clima} grados`);
  //             })
  //       }
  //     )
  //       .catch('No se pudo determinar el clima'); MASE RESOLUCION
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${coords.direccion} es de ${temp}.`;
  } catch (e) {
    return `No se pudo detemrina el clima de ${direccion}.`;
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
