import { AppDataSource } from "../config/data-source";
import { CredentialRepository } from "../repositories/credentialRepository";
import { UserRepository } from "../repositories/userRepository";

const preloadCredentials = [
    {
        username: "lgando",
        password: "1234",
    },
    {
        username: "rbonin",
        password: "12345",
    },
    {
        username: "aancona",
        password: "123456",
    },
];

const preloadUsers = [
    {
        name: "Lautaro Gando",
        email: "lautarogandodev@gmail.com",
        dni: 43171024,
        credentials: 1,
    },
    {
        name: "Rocio Bonin",
        email: "rociobonindev@gmail.com",
        dni: 42100709,
        credentials: 2,
    },
    {
        name: "Agustin Ancona",
        email: "agustinanconadev@gmail.com",
        dni: 43027171,
        credentials: 3,
    },
];

const preloadAppointments = [
    {
        date: "2024-03-02",
        time: "22:25",
        userId: 1,
    },
    {
        date: "2024-03-02",
        time: "22:25",
        userId: 2,
    },
    {
        date: "2024-03-02",
        time: "22:25",
        userId: 3,
    },
];

const preloadCredentialData = async () => {

    await AppDataSource.manager.transaction(async (transactinalEntityManager) => {

        const credentials = await CredentialRepository.find();

        if (credentials.length) return console.log("No se hizo la precarga de credenciales porque ya hay datos.");

        for await (const credential of preloadCredentials) {

            const newCredential = CredentialRepository.create(credential);

            await transactinalEntityManager.save(newCredential);

        };

        console.log("Credenciales precargadas con éxito");

    });

};

const preloadUserData = async () => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    const promises = preloadUsers.map(async (user) => {

        const newUser = UserRepository.create({
            name: user.name,
            email: user.email,
            dni: user.dni,
        });

        await queryRunner.manager.save(newUser);

        const credentials = await CredentialRepository.findOneBy({
            id: user.credentials,
        });

        if (!credentials) throw new Error("Credenciales inexistentes!");

        newUser.credentials = credentials;

        await queryRunner.manager.save(newUser);

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
    await preloadCredentialData();
    await preloadUserData();
};