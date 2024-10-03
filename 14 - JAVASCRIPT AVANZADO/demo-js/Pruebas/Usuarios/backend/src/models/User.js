const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    dni: Number,
    premium: {
        type: Boolean,
        default: false,
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;