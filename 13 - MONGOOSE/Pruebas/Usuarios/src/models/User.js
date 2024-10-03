const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    email: String,
    age: Number,
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;