const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccionm de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv


//lugar.getLugarLatLng( argv.direccion ).then(console.log)
// clima.getClima(35,139)
//     .then(console.log)
//     .catch(e => {
//         console.log(e);
//     })

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion );
        const temp = await clima.getClima(coords.lat,coords.lng);
        return `El clima de ${direccion} es de ${temp}.`
    } catch (error) {
        return ` No se pudo determinar el clima de ${direccion}`
    }

    // Clima de XXXX es de XX
    // No se pudo determinar el clima de ese lugar

}

getInfo(argv.direccion).then(console.log).catch(console.log)