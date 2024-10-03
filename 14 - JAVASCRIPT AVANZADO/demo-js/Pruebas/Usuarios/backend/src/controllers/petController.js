const checkAsync = require("../utils/checkAsync");
const petService = require("../services/petService");

const getAllPets = async (req, res) => {

    const pets = await petService.getAllPets();

    res.status(200).json(pets);

};

const createPet = async (req, res) => {

    const {name, image, animal, race, age} = req.body;

    const newPet = await petService.createPet({name, image, animal, race, age});

    res.status(201).json(newPet);

};

module.exports = {
    getAllPets: checkAsync(getAllPets),
    createPet: checkAsync(createPet),
};