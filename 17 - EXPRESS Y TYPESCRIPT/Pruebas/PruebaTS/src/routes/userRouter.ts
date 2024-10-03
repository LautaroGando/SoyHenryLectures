import { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter: Router = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.createUser);

userRouter.put("/", userController.updateUser);

userRouter.delete("/", userController.deleteUser);

export default userRouter;