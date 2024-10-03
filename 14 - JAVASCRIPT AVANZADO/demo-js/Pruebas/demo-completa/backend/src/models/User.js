const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: String,
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;