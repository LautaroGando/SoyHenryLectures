const Pokemon = require("../models/Pokemon");

module.exports = {
    getAllPokemons: async () => {

        const pokemons = await Pokemon.find().populate("type");

        return pokemons;

    },
    getPokemonByName: async (name) => {

        const pokemon = await Pokemon.findOne(name);

        return pokemon;

    },
    getPokemonById: async (id) => {

        const pokemon = await Pokemon.findById(id);

        return pokemon;

    },
    createPokemon: async (pokemon) => {

        const newPokemon = await Pokemon.create(pokemon);

        return newPokemon

    },
    addType: async ({pokemonId, typeId}) => {

        const pokemon = await Pokemon.findById(pokemonId);

        pokemon.type = typeId;

        await pokemon.save();

        return pokemon;

    },
};