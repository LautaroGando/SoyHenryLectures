const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
    type: Array,
});

const Type = mongoose.model("Type", typeSchema);

module.exports = Type;