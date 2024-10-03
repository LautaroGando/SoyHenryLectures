const User = require("../models/User");

module.exports = {
    getAllUsers: async () => {

        const users = await User.find();

        return users;

    },
    createUser: async (user) => {

        const newUser = await User.create(user);

        return newUser;

    },
};