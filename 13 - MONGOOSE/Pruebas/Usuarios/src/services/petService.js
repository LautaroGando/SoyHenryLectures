const Pet = require("../models/Pet");

module.exports = {
    getAllPets: async () => {

        const pets = await Pet.find();

        return pets;

    },
    getPetByName: async (name) => {

        const pet = await Pet.findOne(name);

        return pet;
            
    },
    getPetById: async (id) => {

        const pet = await Pet.findById(id);

        return pet;

    },
    createPet: async (pet) => {

        const newPet = await Pet.create(pet);

        return newPet;

    },
};