const User = require("../models/User");
const formatAge = require("../helpers/formatAge");

module.exports = {
    getUsers: async () => {

        const users = await User.find().populate("vehicle");

        return users;

    },
    getUserById: async (id) => {

        const user = await User.findById(id);

        return user;

    },
    findUserByName: async (name) => {

        const user = await User.findOne({name});

        return user;

    },
    createUser: async (user) => {

        const newUser = await User.create({...user, age: formatAge(user.age)});

        return newUser;

    },
    addVehicle: async ({userId, vehicleId}) => {

        const user = await User.findById(userId);

        user.vehicle = vehicleId;

        await user.save();

        return user;

    },
};