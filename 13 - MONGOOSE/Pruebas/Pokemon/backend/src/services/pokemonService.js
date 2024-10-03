const Pokemon = require("../models/Pokemon");
const Statistic = require("../models/Statistic");

module.exports = {
    getAllPokemons: async () => {

        const pokemons = await Pokemon.find().populate("statistic");

        return pokemons;

    },
    getPokemonById: async (id) => {

        const pokemon = await Pokemon.findById(id);

        return pokemon;

    },
    getPokemonByName: async (name) => {

        const pokemon = await Pokemon.findOne(name);

        return pokemon;

    },
    createPokemon: async (pokemon) => {

        const newPokemon = await Pokemon.create(pokemon);

        return newPokemon;

    },
    addTypePokemon: async ({pokemonName, statisticType}) => {

        const pokemon = await Pokemon.findOne({name: pokemonName}).populate("statistic");

        const statistic = await Statistic.findOne({type: statisticType});

        pokemon.statistic = statisticType;

        await pokemon.save();

        return pokemon;

    },
};