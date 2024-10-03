import { QueryRunner } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { CredentialRepository } from "../repositories/CredentialRepository";
import { UserRepository } from "../repositories/UserRepository";

const preloadCredentials = [
    {
        username: "lgando",
        password: "1234"
    },
    {
        username: "rbonin",
        password: "1234"
    },
    {
        username: "aancona",
        password: "1234"
    },
];

const preloadUsers = [
    {
        name: "Lautaro Gando",
        email: "lautarogandodev@gmail.com",
        age: 23,
        credentials: 1,
    },
    {
        name: "Rocio Bonin",
        email: "rociobonindev@gmail.com",
        age: 25,
        credentials: 2,
    },
    {
        name: "Agustin Ancona",
        email: "agustinanconadev@gmail.com",
        age: 23,
        credentials: 3,
    },
];

const preloadDataCredentials: Function = async () => {

    AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const credentials = await CredentialRepository.find();

        if (credentials.length) return console.log("Las credenciales no fueron cargadas porque ya existen datos!");

        for await (const credential of preloadCredentials) {

            const newCredential = CredentialRepository.create(credential);

            await transactionalEntityManager.save(newCredential);

        };

        console.log("Credenciales cargadas con éxito!");

    });

};

const preloadDataUsers: Function = async () => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadUsers.map(async (user) => {

        const newUser = UserRepository.create({
            name: user.name,
            age: user.age,
            email: user.email,
        });

        await queryRunner.manager.save(newUser);

        const credentials = await CredentialRepository.findOneBy({
            id: user.credentials
        });

        if (credentials) {

            newUser.credentials = credentials;

            await queryRunner.manager.save(newUser);

        };

        return newUser;

    });

    try {

        await queryRunner.startTransaction();

        await Promise.all(promises);

        console.log("Usuarios precargados con éxito.");

        await queryRunner.commitTransaction();
        
    } catch (error) {

        await queryRunner.rollbackTransaction();

        throw new Error("Error al precargar usuarios.");
        
    } finally {

        await queryRunner.release();

    };

};

export const preloadAllData = async () => {
    await preloadDataCredentials();
    await preloadDataUsers();
};