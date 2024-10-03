import { AppDataSource } from "../config/data-source";
import { CredentialRepository } from "../repositories/credentialRepository";
import { UserRepository } from "../repositories/UserRepository";

const preloadCredentials = [
    {
        username: "lgando",
        password: "1234",
    },
    {
        username: "poroto",
        password: "1234",
    },
    {
        username: "locura",
        password: "1234",
    },
];

const preloadUsers = [
    {
        name: "Lautaro Gando",
        age: 23,
        email: "lautarogandodev@gmail.com",
        credentials: 1
    },
    {
        name: "Francisco Beron",
        age: 42,
        email: "poroto@gmail.com",
        credentials: 2
    },
    {
        name: "Emiliano Locura",
        age: 32,
        email: "locura@gmail.com",
        credentials: 3
    },
];

const preloadDataCredential = async () => {

    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const credentials = await CredentialRepository.find();

        if (credentials.length) return console.log("Error al precargar credenciales, ya hay datos.");
        
        for await (const credentials of preloadCredentials) {

            const newCredential = CredentialRepository.create(credentials);

            await transactionalEntityManager.save(newCredential);

        };

        console.log("Credenciales precargadas con éxito.");

    });

};

const preloadDataUser = async () => {

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
    await preloadDataCredential();
    await preloadDataUser();
};