const {Router} = require("express");
const typeController = require("../controllers/typeController");

const typeRouter = Router();

typeRouter.get("/", typeController.getAllTypes);

typeRouter.post("/", typeController.createType);

module.exports = typeRouter;