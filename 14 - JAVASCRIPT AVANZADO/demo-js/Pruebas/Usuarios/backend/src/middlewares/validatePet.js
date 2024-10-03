const validatePet = (req, res, next) => {

    const {name, image, animal, race, age} = req.body;

    if(!name || !image || !animal || !race || !age) {

        return next({message: "Faltan datos.", statusCode: 400});

    };

    next();

};

module.exports = validatePet;