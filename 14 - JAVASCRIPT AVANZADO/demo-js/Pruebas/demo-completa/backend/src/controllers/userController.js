const userService = require("../services/userService");
const checkAsync = require("../utils/checkAsync");

const getAllUsers = async (req, res) => {

    const users = await userService.getAllUsers();

    res.status(200).json(users);

};

const createUser = async (req, res) => {

    const {name, age} = req.body;

    const newUser = await userService.createUser({name, age});

    res.status(201).json(newUser);

};

const addPet = async (req, res) => {

    const {userId, petId} = req.body;

    await userService.addPet({userId, petId});

    res.status(200).json({
        message: "Mascota adoptada!",
    });

};

module.exports = {
    getAllUsers: checkAsync(getAllUsers),
    createUser: checkAsync(createUser),
    addPet: checkAsync(addPet),
};