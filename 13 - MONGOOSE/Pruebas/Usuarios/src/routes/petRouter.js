const {Router} = require("express");
const petController = require("../controllers/petController");

const petRouter = Router();

petRouter.get("/", petController.getAllPets);
petRouter.get("/byName", petController.getPetByName);
petRouter.get("/:id", petController.getPetById);

petRouter.post("/", petController.createPet);

module.exports = petRouter;