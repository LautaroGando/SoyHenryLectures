const {Router} = require("express");
const pokemonRouter = require("./pokemonRouter");

const router = Router();

router.use("/pokeapi", pokemonRouter);

module.exports = router;