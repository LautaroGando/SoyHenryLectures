import { Router } from "express";
import { createVehicle, getAllVehicles, getVehicleById, updateVehicle } from "../controllers/Vehicle.Controller";

const vehicleRouter: Router = Router();

vehicleRouter.get("/", getAllVehicles);
vehicleRouter.get("/:id", getVehicleById);

vehicleRouter.post("/", createVehicle);

vehicleRouter.put("/register", updateVehicle);

export default vehicleRouter;