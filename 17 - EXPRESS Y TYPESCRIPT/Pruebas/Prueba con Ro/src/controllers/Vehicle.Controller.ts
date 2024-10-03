import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import { createVehicleService, getAllVehiclesService, updateVehicleService } from "../services/Vehicle.Service";

export const getAllVehicles = async (req: Request, res: Response) => {

    const vehicles: Vehicle[] = await getAllVehiclesService();

    try {


        res.status(200).json(vehicles);


    } catch (err) {
        
        res.status(500).json(err);

    }

};

export const createVehicle = async (req: Request, res: Response) => {

    const {brand, color, year, userId} = req.body;

    const newVehicle: Vehicle = await createVehicleService({brand, color, year, userId});

    try {

        res.status(201).json(newVehicle);
        
    } catch (err) {
        
        res.status(500).json(newVehicle);

    };

};

export const updateVehicle = async (req: Request, res: Response) => {

    const {id} = req.body;

    await updateVehicleService(Number(id));

    try {

        res.status(200).json({
            message: "Vehiculo dañado!",
        });
        
    } catch (err) {
      
        res.status(500).json(err);

    };

};