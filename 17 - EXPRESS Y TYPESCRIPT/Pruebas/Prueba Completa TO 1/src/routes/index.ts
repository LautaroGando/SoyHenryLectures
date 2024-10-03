import { Router } from "express";
import userRouter from "./User.Routes";
import vehicleRouter from "./Vehicle.Routes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/vehicles", vehicleRouter);

export default router;