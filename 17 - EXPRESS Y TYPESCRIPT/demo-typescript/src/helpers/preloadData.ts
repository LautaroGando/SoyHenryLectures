import { AppDataSource } from "../config/data-source";
import UserRepository from "../repositories/UserRepository";
import VehicleRepository from "../repositories/VehicleRepository";

const preloadUsers = [
    {
        name: "Jorge Vega",
        email: "jvega@mail.com",
        age: 32,
        active: true,
    },
    {
        name: "Lautaro Gando",
        email: "lgando@mail.com",
        age: 23,
        active: true,
    },
    {
        name: "Rocio Bonin",
        email: "rbonin@mail.com",
        age: 24,
        active: true,
    },
    {
        name: "Agustin Ancona",
        email: "aancona@mail.com",
        age: 23,
        active: false,
    },
];

const preloadVehicles = [
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2020,
        color: "Red",
        userId: 1,
    },
    {
        brand: "Fiat",
        model: "Uno",
        year: 2023,
        color: "Red",
        userId: 1,
    },
    {
        brand: "Fiat",
        model: "Palio",
        year: 2014,
        color: "Gray",
        userId: 1,
    },
    {
        brand: "Peugeot",
        model: "208",
        year: 2024,
        color: "Black",
        userId: 3,
    }
];

export const preloadUserData = async () => {

    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const users = await UserRepository.find();

        if (users.length) return console.log("No se hizo la precarga de datos porque ya hay datos.");

        for await (const user of preloadUsers) {

            const newUser = await UserRepository.create(user);

            await transactionalEntityManager.save(newUser);

        };

        console.log("Precarga de datos de usuarios realizada con éxito");

    });

};

export const preloadVehiclesData = async () => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadVehicles.map(async (vehicle) => {

        const newVehicle = await VehicleRepository.create(vehicle);

        await queryRunner.manager.save(newVehicle);

        const user = await UserRepository.findOneBy({ id: vehicle.userId });

        if (!user) throw Error("Usuario inexistente!");

        newVehicle.user = user;

        await queryRunner.manager.save(newVehicle);

    });

    try {

        await queryRunner.startTransaction();

        await Promise.all(promises);

        console.log("Precarga de vehiculos realizada con éxito!");

        await queryRunner.commitTransaction();

    } catch (error) {

        console.log("Error al intentar crear los vehículos");

        await queryRunner.rollbackTransaction();

    } finally {

        console.log("Ha finalizado el intento de precarga");

        await queryRunner.release();

    };

};