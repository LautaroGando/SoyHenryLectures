import { QueryRunner } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { ICredential } from "../interfaces/ICredential";
import { credentialRepository } from "../repositories/credentialRepository";
import { IUser } from "../interfaces/IUser";
import { userRepository } from "../repositories/userRepository";
import { IAppointment } from "../interfaces/IAppointment";
import { appointmentRepository } from "../repositories/appointmentRepository";
import { Appointment } from "../entities/Appointment";

const preloadCredentials: ICredential[] = [
    {
        username: "lgando",
        password: "Ganditocapo3",
    },
    {
        username: "rbonin",
        password: "Bonincapa3",
    },
    {
        username: "aancona",
        password: "Anconacapo3",
    },
];

const preloadUsers: IUser[] = [
    {
        name: "Lautaro Gando",
        age: 23,
        email: "lautarogandodev@gmail.com",
        credentials: 1,
    },
    {
        name: "Rocio Bonin",
        age: 25,
        email: "rociobonindev@gmail.com",
        credentials: 2,
    },
    {
        name: "Agustin Ancona",
        age: 23,
        email: "agustinanconadev@gmail.com",
        credentials: 3,
    },
];

const preloadAppointments: IAppointment[] = [
    {
        date: new Date("2024-04-20"),
        time: "22:00",
        userId: 1
    },
    {
        date: new Date("2024-04-20"),
        time: "22:00",
        userId: 2
    },
    {
        date: new Date("2024-04-20"),
        time: "22:00",
        userId: 3
    },
];

const preloadDataCredentials: Function = async () => {

    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const credentials: ICredential[] = await credentialRepository.find();

        if (credentials.length) return console.log("No se cargaron las credenciales porque ya hay datos.");
        
        for await (const credential of preloadCredentials) {

            const newCredential: Credential = credentialRepository.create(credential);

            transactionalEntityManager.save(newCredential);

        };

        console.log("Credenciales precargadas con éxito.");

    });

};

const preloadDataUsers: Function = async () => {

    const queryRunner: QueryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadUsers.map(async (user) => {

        const newUser = userRepository.create({
            name: user.name,
            age: user.age,
            email: user.email,
        });

        await queryRunner.manager.save(newUser);

        const credentials: Credential | null = await credentialRepository.findOneBy({
            id: user.credentials,
        })

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

        throw new Error("No se pudieron precargar los usuarios.");

    } finally {

        await queryRunner.release();

    };

};

const preloadDataAppointments: Function = async () => {

    const queryRunner: QueryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadAppointments.map(async (appointment) => {

        const newAppointment: Appointment = appointmentRepository.create({
            date: appointment.date,
            time: appointment.time,
        });

        await queryRunner.manager.save(newAppointment);

        const user = await userRepository.findOneBy({
            id: appointment.userId,
        });

        if (user) {

            newAppointment.user = user;

            await queryRunner.manager.save(newAppointment);

        };

        return newAppointment;

    });

    try {

        await queryRunner.startTransaction();

        await Promise.all(promises);

        console.log("Turnos precargados con éxito.");

        await queryRunner.commitTransaction();
        
    } catch (error) {
        
        await queryRunner.rollbackTransaction();

        throw new Error("Error al precargar turnos.");

    } finally {

        await queryRunner.release();

    };

};

export const allDataPreload: Function = async () => {

    await preloadDataCredentials();
    await preloadDataUsers();
    await preloadDataAppointments();

};