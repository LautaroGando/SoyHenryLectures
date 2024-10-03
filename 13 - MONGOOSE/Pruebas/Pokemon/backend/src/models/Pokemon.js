const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    statistic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Statistic",
    },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;