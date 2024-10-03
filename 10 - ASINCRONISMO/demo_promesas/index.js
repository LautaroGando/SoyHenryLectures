/* const axios = require("axios"); */
const fs = require("fs");

fs.readFile("./mi_archivo.txt", "utf-8", (err, data) => {

    if(err) console.log(err);
    else console.log(data);

});

/* const promesaResuelta = new Promise((resolve, reject) => {

    resolve("Valor de resolucion");

});

const promesaRechazada = new Promise((resolve, reject) => {

    reject("Razon del rechazo");
    
}); */

/* const promise = axios.get("https://students-api.up.railway.app/movies/"); */

// Success handler
/* promise.then((res) => {

    console.log(res.data);

}).catch((err) => {

    console.log("Tuvimos un error");

    console.log(err);

}); */
// Error handler

/* console.log("Se termino todo"); */

/* const fetchMovies = async () => {

    try {

        console.log("Estamos por intentar un par de operaciones");

        const data = await axios.get("https://students-api.up.railway.app/movies/"); // Promesa...

        const movies = data.data;

        console.log(movies);

        console.log("Ha finalizado todo con exito");

    } catch(err) {

        console.log("Tuvimos un error. Estamos en el bloque catch");
        console.log(err.message);

    };

};

fetchMovies(); */