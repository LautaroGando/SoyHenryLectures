const mongoose = require("mongoose");

const Bank = {
    GALICIA: "Galicia",
    BBVA: "BBVA",
    SANTANDER: "Santander",
};

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    dni: Number,
    bank: {
        type: String,
        enum: Object.values(Bank),
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;