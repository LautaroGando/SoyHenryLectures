const {Router} = require("express");
const pokemonController = require("../controllers/pokemonController");

const pokemonRouter = Router();

pokemonRouter.get("/", pokemonController.getAllPokemons);

pokemonRouter.get("/byName", pokemonController.getPokemonByName);

pokemonRouter.get("/:id", pokemonController.getPokemonById);

pokemonRouter.post("/", pokemonController.createPokemon);

pokemonRouter.put("/addType", pokemonController.addType);

module.exports = pokemonRouter;