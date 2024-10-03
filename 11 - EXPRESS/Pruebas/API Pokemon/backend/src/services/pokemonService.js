const axios = require("axios");

module.exports = {
    getAllPokemons: async () => {

        const allPokemons = [];
        
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=0`);
        
        const pokemons = response.data.results;

        for (const pokemon of pokemons) {

            const pokemonDetails = await axios.get(pokemon.url);

            const { id, name, sprites } = pokemonDetails.data;

            const sprite = sprites.other?.home?.front_default;

            allPokemons.push({id, name, sprite});

        };

        return allPokemons;

    },
};