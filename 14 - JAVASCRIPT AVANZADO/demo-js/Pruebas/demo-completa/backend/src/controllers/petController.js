const petService = require("../services/petService");
const checkAsync = require("../utils/checkAsync");

const getAllPets = async (req, res) => {

    const pets = await petService.getAllPets();

    res.status(200).json(pets);

};

const createPet = async (req, res) => {

    const {name, animal} = req.body;

    const newPet = await petService.createPet({name, animal});

    res.status(201).json(newPet);

};

module.exports = {
    getAllPets: checkAsync(getAllPets),
    createPet: checkAsync(createPet),
};