// En este modulo van a estar las funciones que establecen la logica de negocio de cada una de las rutas

// Para esa ruta GET /users => 
// Vamos a ir a la base de datos a pedir la informacion de los usuarios 
// Responder al cliente con la informacion obtenida

const userController = (req, res) => {

    res.status(200).send("Estamos recibiendo una solicitud para obtener datos de usuarios");

};

const postController = (req, res) => {

    res.status(200).send("Estamos enviando informacion sobre posts");

};

module.exports = {
    userController,
    postController,
};