const mongoose = require("mongoose");

const statisticSchema = new mongoose.Schema({
    type: Array,
    debility: Array,
    resistence: Array,
});

const Statistic = mongoose.model("Statistic", statisticSchema);

module.exports = Statistic;