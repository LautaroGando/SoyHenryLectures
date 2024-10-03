const userService = require("../services/userService");

module.exports = {
    getAllUsers: async (req, res) => {

        const users = await userService.getAllUsers();

        try {

            res.status(200).json(users);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    getUserByName: async (req, res) => {

        const {name} = req.body;

        const user = await userService.getUserByName({name});

        try {

            res.status(200).json(user);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    getUserById: async (req, res) => {

        const {id} = req.params;

        const user = await userService.getUserById(id);

        try {

            res.status(200).json(user);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    createUser: async (req, res) => {

        const {_id, name, email, age} = req.body;

        const newUser = await userService.createUser({_id, name, email, age});

        try {

            res.status(201).json(newUser);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    addPet: async (req, res) => {

        const {userId, petId} = req.body;

        await userService.addPet({userId, petId});

        try {

            res.status(200).json({
                message: "Mascota adoptada.",
            });
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
};