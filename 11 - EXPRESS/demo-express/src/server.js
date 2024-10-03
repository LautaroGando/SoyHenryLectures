// Aca voy a tener una funcion:

// Esta funcion se comunica con la base de datos para pedir la informacion de los usuarios. Y darle el formato adecuado
// Id, Nombre, Nombre de usuario, Email, Fecha de alta, Fecha de modificacion, Domicilio, Telefono

// Respondera con esto => Id, Nombre, Nombre de usuario, Email

const express = require("express");
const router = require("./routes/");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Aca quiero utilizar el middleware de morgan.
app.use(morgan("dev"));
// Aca quiero utilizar el middleware de cors.
app.use(cors());
// Aca quiero utilizar el middleware de express.
app.use(express.json());
// Aca quiero utilizar mi propio middleware.
app.use((req, res, next) => {

    console.log("Estamos pasando por mi propio middleware!");

    next();

});

app.use(router);

module.exports = app;