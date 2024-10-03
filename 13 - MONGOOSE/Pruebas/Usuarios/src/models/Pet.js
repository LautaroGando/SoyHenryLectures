const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    animal: String,
    name: String,
    race: String,
    age: Number,
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;