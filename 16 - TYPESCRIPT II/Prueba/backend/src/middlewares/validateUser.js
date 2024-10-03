const validateUser = async (req, res, next) => {

    const {name, surname, age, dni, bank} = req.body;

    if (!name || !surname || !age || !dni || !bank) {

        res.status(400).json("Faltan datos.");

    };

    next();

};

module.exports = validateUser;