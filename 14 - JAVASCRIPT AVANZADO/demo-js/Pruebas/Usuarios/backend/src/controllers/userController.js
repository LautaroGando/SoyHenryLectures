const userService = require("../services/userService");
const checkAsync = require("../utils/checkAsync");

const getAllUsers = async (req, res) => {

    const users = await userService.getAllUsers();

    res.status(200).json(users);

};

const createUser = async (req, res) => {

    const {name, email, age, dni} = req.body;

    const newUser = await userService.createUser({name, email, age, dni});

    res.status(201).json(newUser);

};

const addPet = async (req, res) => {

    const {userName, petName} = req.body;

    await userService.addPet({userName, petName});

    res.status(200).json({
        message: "Mascota adoptada exitosamente.",
    });

};

module.exports = {
    getAllUsers: checkAsync(getAllUsers),
    createUser: checkAsync(createUser),
    addPet: checkAsync(addPet),
};