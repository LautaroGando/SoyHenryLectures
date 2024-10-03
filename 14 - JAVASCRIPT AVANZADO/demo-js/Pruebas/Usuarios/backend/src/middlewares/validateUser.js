const validateUser = (req, res, next) => {

    const {name, email, age, dni} = req.body;

    if(!name || !email || !age || !dni) {

        return next({message: "Faltan datos.", statusCode: 400});

    };

    next();

};

module.exports = validateUser;