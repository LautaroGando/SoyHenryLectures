import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/User.Controller";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);

userRouter.post("/", createUser);

export default userRouter;