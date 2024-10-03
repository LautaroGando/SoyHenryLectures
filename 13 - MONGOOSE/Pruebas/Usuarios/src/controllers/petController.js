const petService = require("../services/petService");

module.exports = {
    getAllPets: async (req, res) => {

        const pets = await petService.getAllPets();

        try {

            res.status(200).json(pets);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    getPetByName: async (req, res) => {

        const {name} = req.body;

        const pet = await petService.getPetByName({name});

        try {

            res.status(200).json(pet);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    getPetById: async (req, res) => {

        const {id} = req.params;

        const pet = await petService.getPetById(id);

        try {

            res.status(200).json(pet);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    createPet: async (req, res) => {

        const {animal, name, race, age} = req.body;

        const newPet = await petService.createPet({animal, name, race, age});

        try {

            res.status(201).json(newPet);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
};