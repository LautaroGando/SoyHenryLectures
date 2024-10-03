import { Router } from "express";
import { loginUser } from "../controllers/User.Controller";

const userRouter: Router = Router();

userRouter.get("/", );
userRouter.get("/:id", );

userRouter.post("/register", );
userRouter.post("/login", loginUser);

export default userRouter;