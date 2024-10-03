import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import { createVehicleService, getAllVehiclesService, getVehicleByIdService, updateRegisterService } from "../services/Vehicle.Service";

export const getAllVehicles = async (req: Request, res: Response) => {

    const vehicles: Vehicle[] = await getAllVehiclesService();

    res.status(200).json(vehicles);

};

export const getVehicleById = async (req: Request, res: Response) => {

    const {id} = req.params;

    const vehicle: Vehicle | null = await getVehicleByIdService(Number(id));

    res.status(200).json(vehicle);

};

export const createVehicle = async (req: Request, res: Response) => {

    const {car, userId} = req.body;

    const newVehicle: Vehicle = await createVehicleService({car, userId});

    res.status(201).json(newVehicle);

};

export const updateVehicle = async (req: Request, res: Response) => {

    const {id} = req.body;

    await updateRegisterService(id);

    res.status(200).json({
        message: "Registro vencido!",
    });

};