const pokemonService = require("../services/pokemonService");

module.exports = {
    getAllPokemons: async (req, res) => {

        const pokemons = await pokemonService.getAllPokemons();

        try {

            res.status("200").json(pokemons);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    getPokemonByName: async (req, res) => {

        const {name} = req.body;

        const pokemon = await pokemonService.getPokemonByName({name});

        try {

            res.status("200").json(pokemon);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    getPokemonById: async (req, res) => {

        const {id} = req.params;

        const pokemon = await pokemonService.getPokemonById(id);

        try {

            res.status("200").json(pokemon);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    createPokemon: async (req, res) => {

        const {id, image, name} = req.body;

        const newPokemon = await pokemonService.createPokemon({id, image, name});

        try {

            res.status("201").json(newPokemon);
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
    addType: async (req, res) => {

        const {pokemonId, typeId} = req.body;

        await pokemonService.addType({pokemonId, typeId});

        try {

            res.status("201").json({
                message: "Propiedad agregada exitosamente.",
            });
            
        } catch (err) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
};