const User = require("../models/User");
const Pet = require("../models/Pet");
const formatAge = require("../helpers/formatAge");

module.exports = {
    getAllUsers: async () => {

        const users = await User.find().populate("pet");

        return users;

    },
    createUser: async (user) => {

        const newUser = await User.create({...user, age: formatAge(user.age)});

        return newUser;

    },
    addPet: async ({userName, petName}) => {

        const user = await User.findOne({name: userName});

        const pet = await Pet.findOne({name: petName});

        user.pet = pet;

        await user.save();

        return user;

    },
};