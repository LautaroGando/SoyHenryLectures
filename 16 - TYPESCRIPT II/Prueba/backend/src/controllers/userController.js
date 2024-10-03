const userService = require("../services/userService");
const checkAsync = require("../utils/checkAsync");

const getAllUsers = async (req, res) => {

    const users  = await userService.getAllUsers();
    
    res.status(200).json(users);

};

const createUser = async (req, res) => {

    const {name, surname, age, dni, bank} = req.body;

    const newUser = await userService.createUser({name, surname, age, dni, bank});

    res.status(201).json(newUser);

};

module.exports = {
    getAllUsers: checkAsync(getAllUsers),
    createUser: checkAsync(createUser),
};