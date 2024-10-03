import { QueryRunner } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { ICredential } from "../interfaces/ICredential";
import { IUser } from "../interfaces/IUser";
import { CredentialRepository } from "../repositories/CredentialRepository";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { IAppointment } from "../interfaces/IAppointment";
import { AppointmentRepository } from "../repositories/AppointmentRepository";

const preloadCredentials: ICredential[] = [
    {
        username: "lgando",
        password: "Ganditocapo3",
    },
    {
        username: "rbonin",
        password: "Pupicapa3",
    },
    {
        username: "aancona",
        password: "cucaracha44",
    },
];

const preloadUsers: IUser[] = [
    {
        name: "Lautaro Gando",
        email: "lautarogandodev@gmail.com",
        birthdate: "2001-05-22",
        nDni: 43171024,
        credentials: 1,
    },
    {
        name: "Rocio Bonin",
        email: "rociobonindev@gmail.com",
        birthdate: "1999-08-03",
        nDni: 42100709,
        credentials: 2,
    },
    {
        name: "Agustin Ancona",
        email: "agustinanconadev@gmail.com",
        birthdate: "2001-02-12",
        nDni: 43024171,
        credentials: 3,
    },
];

const preloadAppointments: IAppointment[] = [
    {
        date: "2024-09-12",
        time: "22:00",
        userId: 1,
    },
    {
        date: "2024-09-12",
        time: "22:00",
        userId: 2,
    },
    {
        date: "2024-09-12",
        time: "22:00",
        userId: 3,
    },
];

const preloadDataCredentials: Function = async (): Promise<void> => {

    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const credentials: Credential[] = await CredentialRepository.find();

        if (credentials.length) return console.log("Error al precargar credenciales: Ya hay datos.");

        for await (const credential of preloadCredentials) {

            const newCredentials: Credential = CredentialRepository.create(credential);

            await transactionalEntityManager.save(newCredentials);

        };

        return console.log("Precarga de credentiales realizada con éxito.");

    });

};

const preloadDataUsers: Function = async () => {

    const queryRunner: QueryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadUsers.map(async (user) => {

        const newUser: User = UserRepository.create({
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
        });

        await queryRunner.manager.save(newUser);

        const credentials: Credential | null = await CredentialRepository.findOneBy({
            id: user.credentials,
        });

        if (!credentials) return console.log("No se encontraron las credenciales.");

        newUser.credentials = credentials;

        await queryRunner.manager.save(newUser);

    });

    try {

        await queryRunner.startTransaction();

        await Promise.all(promises);

        console.log("Precarga de usuarios realizada con éxito.");
        
        await queryRunner.commitTransaction();
        
    } catch (error) {

        await queryRunner.rollbackTransaction();

        console.log(error);
        
        throw new Error("Error al precargar los datos de usuarios.");
        
    } finally {

        await queryRunner.release();

    };

};

const preloadDataAppointments: Function = async () => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadAppointments.map(async (appointment) => {

        const newAppointment = AppointmentRepository.create(appointment);

        await queryRunner.manager.save(newAppointment);

        const user = await UserRepository.findOneBy({
            id: appointment.userId,
        });

        if (!user) return console.log("No se encontro el usuario.");

        newAppointment.user = user;

        await queryRunner.manager.save(newAppointment);

    });

    try {

        await queryRunner.startTransaction();

        await Promise.all(promises);

        console.log("Precarga de turnos realizada con éxito.");
        
        await queryRunner.commitTransaction();
        
    } catch (error) {
        
        await queryRunner.rollbackTransaction();

        console.log(error);

        throw new Error("Error al precargar los datos de los turnos.");

    } finally {

        await queryRunner.release();

    };

};

export const preloadAll: Function = async () => {
    await preloadDataCredentials();
    await preloadDataUsers();
    await preloadDataAppointments();
};