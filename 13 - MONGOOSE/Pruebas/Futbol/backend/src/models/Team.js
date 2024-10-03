const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    img: String,
    name: String,
    titles: Number,
    stadiumCapacity: Number,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;