const Statistic = require("../models/Statistic");

module.exports = {
    getAllStatistics: async () => {

        const statistics = await Statistic.find();

        return statistics;

    },
    createStatistic: async (statistic) => {

        const newStatistic = await Statistic.create(statistic);

        return newStatistic;

    },
};
