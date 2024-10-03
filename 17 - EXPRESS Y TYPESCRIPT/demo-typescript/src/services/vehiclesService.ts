import { AppDataSource } from "../config/data-source";
import { CreateVehicleDto } from "../dto/CreateVehicleDto";
import VehicleRepository from "../repositories/VehicleRepository";
import { Vehicle } from "../entities/Vehicle";
import UserRepository from "../repositories/UserRepository";

export const getVehiclesService = async (): Promise<Vehicle[]> => {

    const vehicles = await VehicleRepository.find({
        relations: {
            user: true,
        },
    });

    return vehicles;

};

export const createVehicleService = async (vehicle: CreateVehicleDto): Promise<Vehicle> => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    try {

        await queryRunner.startTransaction();

        const newVehicle = await VehicleRepository.create(vehicle);

        await queryRunner.manager.save(newVehicle);
        
        const user = await UserRepository.findById(vehicle.userId);

        newVehicle.user = user;

        await queryRunner.manager.save(newVehicle);

        await queryRunner.commitTransaction();

        return newVehicle;

    } catch (error) {

        await queryRunner.rollbackTransaction();

        throw Error("Usuario inexistente!");

    } finally {

        await queryRunner.release();

    };

};