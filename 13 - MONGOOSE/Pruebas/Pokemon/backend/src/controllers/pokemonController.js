const pokemonService = require("../services/pokemonService");
const checkAsync = require("../utils/checkAsync");

const getAllPokemons = async (req, res) => {

    const pokemons = await pokemonService.getAllPokemons();

    res.status(200).json(pokemons);

};

const getPokemonById = async (req, res) => {

    const {id} = req.params;

    const pokemon = await pokemonService.getPokemonById(id);

    res.status(200).json(pokemon);

};

const getPokemonByName = async (req, res) => {

    const {name} = req.body;
    
    const pokemon = await pokemonService.getPokemonByName({name});

    res.status(200).json(pokemon);

};

const createPokemon = async (req, res) => {

    const {_id, name} = req.body;

    const newPokemon = await pokemonService.createPokemon({_id, name});

    res.status(201).json(newPokemon);

};

const addTypePokemon = async (req, res) => {

    const {pokemonName, statisticType} = req.body;

    await pokemonService.addTypePokemon({pokemonName, statisticType});

    res.status(200).json({
        message: "Tipo agregado",
    });

};

module.exports = {
    getAllPokemons: checkAsync(getAllPokemons),
    getPokemonById: checkAsync(getPokemonById),
    getPokemonByName: checkAsync(getPokemonByName),
    createPokemon: checkAsync(createPokemon),
    addTypePokemon: checkAsync(addTypePokemon),
};