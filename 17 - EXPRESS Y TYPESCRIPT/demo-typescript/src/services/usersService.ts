import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
import UserRepository from "../repositories/UserRepository";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

let users: IUser[] = [];

let id: number = 1;

export const getUsersService = async (): Promise<User[]> => {

    const users = await UserRepository.find({
        relations: {
            vehicles: true,
        },
    });

    return users;

};

export const getUserByIdService = async (id: number): Promise<User | null> => {

    const user = await UserRepository.findById(id);

    return user;

};

export const createUserService = async (userData: UserDto): Promise<User> => {
    
    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();

    try {

        await queryRunner.startTransaction();

        const newUser = await UserRepository.create(userData);

        await queryRunner.manager.save(newUser);

        await queryRunner.commitTransaction();

        return newUser;
        
    } catch (error) {

        await queryRunner.rollbackTransaction();

        throw Error("No se pudo crear el usuario!");
        
    } finally {

        await queryRunner.release();

    };

};

export const deleteUserService = async (id: number): Promise<void> => {

    users = users.filter((user: IUser) => {

        return user.id !== id;

    });

};