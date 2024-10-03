const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: String,
    image: String,
    animal: String,
    race: String,
    age: String,
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;