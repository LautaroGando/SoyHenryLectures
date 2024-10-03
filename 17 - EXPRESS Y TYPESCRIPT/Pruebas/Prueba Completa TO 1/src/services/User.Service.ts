import { UserModel } from "../config/data-source";
import { CredentialDto } from "../dtos/CredentialDto";
import { UserDto } from "../dtos/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialsService } from "./Credential.Service";

export const getAllUsersService = async (): Promise<User[]> => {

    const users: User[] = await UserModel.find({
        relations: {
            credentials: true,
        },
    });
    
    return users;

};

export const getUserByIdService = async (id: number): Promise<User | null> => {

    const user: User | null = await UserModel.findOneBy({
        id,
    });

    return user;

};

export const getUserByNameService = async (name: string): Promise<User | null> => {

    const user: User | null = await UserModel.findOneBy({
        name,
    });

    return user;

};

export const createUserService = async (userData: UserDto, credentialData: CredentialDto) => {

    const credentials: Credential = await createCredentialsService(credentialData);

    const newUser: User = await UserModel.create(userData);

    if (credentials) {

        newUser.credentials = credentials;

        await UserModel.save(newUser);

    };
    
    return newUser;

};