import { Router } from "express";
import { createAppointment, getAllAppointments, getAppointmentById, updateAppointment } from "../controllers/Appointment.Controller";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/appointment", getAppointmentById);

appointmentRouter.post("/schedule", createAppointment);

appointmentRouter.put("/appointment/schedule", updateAppointment);

export default appointmentRouter;