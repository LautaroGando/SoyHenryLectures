const Type = require("../models/Type");

module.exports = {
    getAllTypes: async () => {

        const types = await Type.find();

        return types;

    },
    createType: async (type) => {

        const newType = await Type.create(type);

        return newType;

    },
};