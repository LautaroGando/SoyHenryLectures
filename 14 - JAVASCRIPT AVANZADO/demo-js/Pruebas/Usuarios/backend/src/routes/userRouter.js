const {Router} = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");
const validateAdopt = require("../middlewares/validateAdopt");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", validateUser, userController.createUser);

userRouter.put("/addPet", validateAdopt, userController.addPet);

module.exports = userRouter;