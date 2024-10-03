function obtenerDatos() {

    return fetch("api/datos");

};

async function procesarDatos() {

    const respuesta = await obtenerDatos();

    const datos = await respuesta.json();

    return datos;

};

module.exports = procesarDatos;