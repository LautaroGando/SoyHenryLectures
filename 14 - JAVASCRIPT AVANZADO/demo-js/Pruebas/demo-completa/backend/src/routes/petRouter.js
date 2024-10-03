const {Router} = require("express");
const petController = require("../controllers/petController");

const petRouter = Router();

petRouter.get("/", petController.getAllPets);

petRouter.post("/", petController.createPet);

module.exports = petRouter;