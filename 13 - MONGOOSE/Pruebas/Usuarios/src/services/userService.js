const User = require("../models/User");

module.exports = {
    getAllUsers: async () => {

        const users = await User.find().populate("pet");

        return users;

    },
    getUserByName: async (name) => {

        const user = await User.findOne(name);

        return user;

    },
    getUserById: async (id) => {

        const user = await User.findById(id);

        return user;

    },
    createUser: async (user) => {

        const newUser = await User.create(user);

        return newUser;

    },
    addPet: async ({userId, petId}) => {

        const user = await User.findById(userId);

        user.pet = petId;

        await user.save();

        return user;

    },
};