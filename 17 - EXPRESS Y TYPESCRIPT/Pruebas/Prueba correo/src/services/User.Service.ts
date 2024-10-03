import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { ICredential } from "../interfaces/ICredential";
import { ILogin } from "../interfaces/ILogin";
import { UserRepository } from "../repositories/UserRepository";
import { checkCredentialService, createCredentialService } from "./Credential.Service";

export const getAllUsersService = async () => {

    const users = await UserRepository.find();

    return users;

};

export const getUserByIdService = async (id: number) => {

    const user = await UserRepository.findOneBy({
        id,
    });

    return user;

};

export const createUserService = async (userData: User, credentialData: ICredential) => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    try {
      
        await queryRunner.startTransaction();

        const findCredentials = await createCredentialService(credentialData);

        const newUser = UserRepository.create(userData);

        await UserRepository.save(newUser);

        if (findCredentials) {

            newUser.credentials = findCredentials;

            await UserRepository.save(newUser);

        };

        await queryRunner.commitTransaction();

        return newUser;

    } catch (error) {

        await queryRunner.rollbackTransaction();

        throw new Error("Error al crear el usuario.");
        
    } finally {

        await queryRunner.release();

    };

};

export const loginUserService = async (credentialData: ICredential) => {

    const findCredential = await checkCredentialService(credentialData);

    const user = await UserRepository.findOneBy({
        id: findCredential.id,
    });

    if (!user) throw new Error("Credenciales invalidas.");

    const login: ILogin = {
        login: true,
        user
    };

    if (login) return login;
    
};