import { Router } from "express";
import { createUser, getAllUsers, getUserById, getUserByName } from "../controllers/User.Controller";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/byName", getUserByName);
userRouter.get("/:id", getUserById);

userRouter.post("/register", createUser);

export default userRouter;