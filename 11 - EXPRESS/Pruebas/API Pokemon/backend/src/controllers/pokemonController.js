const pokemonService = require("../services/pokemonService");

module.exports = {
    getAllPokemons: async (req, res) => {

        try {

            const pokemons = await pokemonService.getAllPokemons();

            res.status(200).json(pokemons);
            
        } catch (error) {
            
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
};