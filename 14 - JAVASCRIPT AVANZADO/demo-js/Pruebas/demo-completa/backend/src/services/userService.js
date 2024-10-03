const formatAge = require("../helpers/formatAge");
const User = require("../models/User");

module.exports = {
    getAllUsers: async () => {

        const users = await User.find().populate("pet");

        return users;

    },
    createUser: async (user) => {

        const newUser = await User.create({...user, age: formatAge(user.age)});

        return newUser;

    },
    addPet: async ({userId, petId}) => {

        const user = await User.findById(userId);

        user.pet = petId;

        await user.save();

        return user;

    },
};