const Pet = require("../models/Pet");
const formatAge = require("../helpers/formatAge");

module.exports = {
    getAllPets: async () => {

        const pets = await Pet.find();

        return pets;

    },
    createPet: async (pet) => {

        const newPet = await Pet.create({...pet, age: formatAge(pet.age)});

        return newPet;

    },
};