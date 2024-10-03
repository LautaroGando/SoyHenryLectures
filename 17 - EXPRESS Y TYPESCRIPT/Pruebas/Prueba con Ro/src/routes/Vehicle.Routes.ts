import { Router } from "express";
import { createVehicle, getAllVehicles, updateVehicle } from "../controllers/Vehicle.Controller";

const vehicleRouter: Router = Router();

vehicleRouter.get("/", getAllVehicles);

vehicleRouter.post("/", createVehicle);

vehicleRouter.put("/damageVehicle", updateVehicle);

export default vehicleRouter;