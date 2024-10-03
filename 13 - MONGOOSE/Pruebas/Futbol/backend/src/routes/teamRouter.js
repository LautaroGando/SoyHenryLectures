const {Router} = require("express");
const teamController = require("../controllers/teamController");

const teamRouter = Router();

teamRouter.get("/", teamController.getAllTeams);

teamRouter.post("/", );

module.exports = teamRouter;