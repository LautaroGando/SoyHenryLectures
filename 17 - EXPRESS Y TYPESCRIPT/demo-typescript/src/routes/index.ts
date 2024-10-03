import { Router } from "express";
import { getUsers, createUser, deleteUser, getUserById } from "../controllers/usersController";
import auth from "../middlewares/auth";
import { createVehicle, getVehicles } from "../controllers/vehiclesController";

const router: Router = Router();

router.get("/users", auth, getUsers);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

router.delete("/users", deleteUser);

router.get("/vehicles", getVehicles);

router.post("/vehicles", createVehicle);

export default router;