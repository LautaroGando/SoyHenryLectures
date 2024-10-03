const {Router} = require("express");
const pokemonRouter = require("./pokemonRouter");
const statisticRouter = require("./statisticRouter");

const router = Router();

router.use("/pokemons", pokemonRouter);

router.use("/statistics", statisticRouter);

module.exports = router;