const statisticService = require("../services/statisticService");
const checkAsync = require("../utils/checkAsync");

const getAllStatistics = async (req, res) => {

    const statistics = await statisticService.getAllStatistics();
    
    res.status(200).json(statistics);

};

const createStatistic = async (req, res) => {

    const {type, debility, resistence} = req.body;

    const newStatistic = await statisticService.createStatistic({type, debility, resistence});

    res.status(201).json(newStatistic);

};

module.exports = {
    getAllStatistics: checkAsync(getAllStatistics),
    createStatistic: checkAsync(createStatistic),
};