const {Router} = require("express");
const statisticController = require("../controllers/statisticController");

const statisticRouter = Router();

statisticRouter.get("/", statisticController.getAllStatistics);

statisticRouter.post("/", statisticController.createStatistic);

module.exports = statisticRouter;