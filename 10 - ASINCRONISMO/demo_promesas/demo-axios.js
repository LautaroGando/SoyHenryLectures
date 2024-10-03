const axios = require("axios");

axios.get("https://students-api.up.railway.app/movies/");

// Los metodos de axios siempre me retornan una promesa
// Cuando axios realiza una solicitud y obtiene un resultado favorable axios resuelve la promesa
// Cuando axios realiza una solicitud y no obtiene un resultado favorable axios rechaza la promesa y arroja un error

// IMPORTANTE PARA LOS METODOS POST!
axios.post("https://students-api.up.railway.app/movies/", {
    title: "Lo que el viento se llevo",
    year: "XXXX",
});

axios.put("URL", {});

axios.delete("URL");