const Pet = require("../models/Pet");

module.exports = {
    getAllPets: async () => {

        const pets = await Pet.find();

        return pets;

    },
    createPet: async (pet) => {

        const newPet = await Pet.create(pet);

        return newPet;

    },
}