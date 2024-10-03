import { Router } from "express";
import userRouter from "./User.Routes";
import appointmentRouter from "./Appointment.Routes";

const routes: Router = Router();

routes.use("/users", userRouter);
routes.use("/appointments", appointmentRouter);

export default routes;