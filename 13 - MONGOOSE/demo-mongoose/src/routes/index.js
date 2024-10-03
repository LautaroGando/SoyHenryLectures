const {Router} = require("express");

const userController = require("../controllers/userController");
const vehicleController = require("../controllers/vehicleController");
const validateId = require("../middlewares/validateId");

const router = Router();

router.get("/users", userController.getUsers);

router.get("/users/byName", userController.getUserByName);

router.get("/users/:id", validateId, userController.getUserById);

router.post("/users", userController.createUser);

router.put("/users/addVehicle", userController.addVehicle);

router.get("/vehicles", vehicleController.getAllVehicles);

router.post("/vehicles", vehicleController.createVehicle);

module.exports = router;