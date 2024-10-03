import { UserModel, VehicleModel } from "../config/data.source";
import { VehicleDto } from "../dtos/VehicleDto";
import { User } from "../entities/User";
import { Vehicle } from "../entities/Vehicle";
import { vehicleCondition } from "../enums/vehicleCondition";

export const getAllVehiclesService = async (): Promise<Vehicle[]> => {

    const vehicles: Vehicle[] = await VehicleModel.find({
        relations: {
            user: true,
        },
    });

    return vehicles;

};

export const createVehicleService = async (vehicleData: VehicleDto): Promise<Vehicle> => {

    const user: User | null = await UserModel.findOneBy({
        id: vehicleData.userId,
    });

    const newVehicle: Vehicle = VehicleModel.create(vehicleData);

    if (user) {

        newVehicle.user = user;

        await VehicleModel.save(newVehicle);

    };

    return newVehicle;

};

export const updateVehicleService = async (id: number): Promise<any> => {

    const vehicle: Vehicle | null = await VehicleModel.findOneBy({
        id,
    });

    if (!vehicle) return {error: "Vehiculo inexistente!"};

    vehicle.status = vehicleCondition.DAMAGED;

    await VehicleModel.save(vehicle);

};