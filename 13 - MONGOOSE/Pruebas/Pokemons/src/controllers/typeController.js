const typeService = require("../services/typeService");

module.exports = {
    getAllTypes: async (req, res) => {

        const types = await typeService.getAllTypes();

        try {

            res.status(200).json(types);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            })

        };

    },
    createType: async (req, res) => {

        const {type} = req.body;

        const newType = await typeService.createType({type});

        try {

            res.status(201).json(newType);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            })

        };

    },
};