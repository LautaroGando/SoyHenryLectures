import { Router } from "express";
import userRouter from "./User,.Routes";

const router: Router = Router();

router.use("/users", userRouter);

export default router;