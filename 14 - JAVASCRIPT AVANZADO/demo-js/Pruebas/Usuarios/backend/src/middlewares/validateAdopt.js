const User = require("../models/User");
const Pet = require("../models/Pet");

const validateAdopt = async (req, res, next) => {

    const { userName, petName } = req.body;

    const users = await User.findOne({name: userName});

    if(!users) {

        return next({ message: "Usuario no encontrado.", statusCode: 400 });

    };

    const pets = await Pet.findOne({name: petName});

    if(!pets) {

        return next({ message: "Mascota no encontrada.", statusCode: 400 });

    };

    if (!userName || !petName) {

        return next({ message: "Faltan datos.", statusCode: 400 });

    };

    next();

};

module.exports = validateAdopt;