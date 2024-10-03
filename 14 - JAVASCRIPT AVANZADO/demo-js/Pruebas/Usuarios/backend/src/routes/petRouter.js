const {Router} = require("express");
const petController = require("../controllers/petController");
const validatePet = require("../middlewares/validatePet");

const petRouter = Router();

petRouter.get("/", petController.getAllPets);

petRouter.post("/", validatePet, petController.createPet);

module.exports = petRouter;