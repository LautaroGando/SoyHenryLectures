import { Router } from "express";
import userRouter from "./User.Routes";
import appointmentRouter from "./Appointment.Routes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);

export default router;