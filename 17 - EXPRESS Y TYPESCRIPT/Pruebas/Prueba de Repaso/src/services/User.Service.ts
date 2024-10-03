import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { ILogin } from "../interfaces/ILogin";
import { UserRepository } from "../repositories/UserRepository";
import { checkCredentialsService, createCredentialsService } from "./Credential.Service";

export const getAllUsersService: Function = async (): Promise<User[]> => {

    const users: User[] = await UserRepository.find();

    return users;

};

export const getUserByIdService: Function = async (id: number): Promise<User> => {

    const user: User | null = await UserRepository.findOneBy({
        id,
    });

    if (!user) throw new Error("Usuario no encontrado.");

    return user;

};

export const createUserService: Function = async (userData: User, credentialData: Credential): Promise<User> => {

    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    try {

        await queryRunner.startTransaction();

        const newCredentials: Credential = await createCredentialsService(credentialData);

        const newUser: User = UserRepository.create(userData);

        await queryRunner.manager.save(newUser);

        if (newCredentials) {

            newUser.credentials = newCredentials;

            await queryRunner.manager.save(newUser);

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

export const loginUserService: Function = async (credentialData: Credential): Promise<ILogin> => {

    const checkCredentials = await checkCredentialsService(credentialData);

    const user: User | null = await UserRepository.findOneBy({
        id: checkCredentials.id
    })

    if (!user) throw new Error("Usuario no encontrado.");

    const login: ILogin = {
        login: true,
        user,
    };

    return login;

};