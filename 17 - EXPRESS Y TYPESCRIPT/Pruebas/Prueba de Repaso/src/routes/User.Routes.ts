import { Router } from "express";
import { loginUser } from "../controllers/User.Controller";

const userRouter: Router = Router();

userRouter.get("/", );
userRouter.get("/:id", );

userRouter.post("/login", loginUser);
userRouter.post("/register", );

export default userRouter;