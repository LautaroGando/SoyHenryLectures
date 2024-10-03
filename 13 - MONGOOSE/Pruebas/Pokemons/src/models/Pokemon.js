const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    id: Number,
    image: String,
    name: String,
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
    },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;