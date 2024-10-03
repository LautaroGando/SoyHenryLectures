import { UserModel, VehicleModel } from "../config/data-source";
import { VehicleDto } from "../dtos/VehicleDto";
import { User } from "../entities/User";
import { Vehicle } from "../entities/Vehicle";
import { VehicleRegister } from "../enums/VehicleRegister";

export const getAllVehiclesService = async (): Promise<
Vehicle[]> => {

    const vehicles: Vehicle[] = await VehicleModel.find({
        relations: {
            user: true,
        },
    });

    return vehicles;

};

export const getVehicleByIdService = async (id: number): Promise<Vehicle | null> => {

    const vehicle: Vehicle | null = await VehicleModel.findOneBy({
        id,
    });

    return vehicle;

};

export const createVehicleService = async (vehicleData: VehicleDto): Promise<Vehicle> => {

    const user: User | null = await UserModel.findOneBy({
        id: vehicleData.userId,
    });

    const newVehicle: Vehicle = await VehicleModel.create(vehicleData);

    if (user) {

        newVehicle.user = user;

        await VehicleModel.save(newVehicle);

    };

    return newVehicle;

};

export const updateRegisterService = async (id: number): Promise<void> => {

    const vehicle: Vehicle | null = await VehicleModel.findOneBy({
        id,
    });

    if (!vehicle) throw new Error("Vehiculo no registardo!");

    vehicle.register = VehicleRegister.DEFEATED;

    await VehicleModel.save(vehicle);

};