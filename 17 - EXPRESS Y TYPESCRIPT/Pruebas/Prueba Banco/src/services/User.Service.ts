import { CredentialDto } from "../dtos/CredentialDto";
import { UserDto } from "../dtos/UserDto";
import { IUser } from "../interfaces/IUser";
import { createCredentialsService } from "./Credential.Service";

const users: IUser[] = [];

let id: number = 1;

export const getAllUsersService = async (): Promise<IUser[]> => {

    return users;

};

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {

    const findUser: IUser | undefined = users.find((user: IUser) => {

        return id === user.id;

    });

    return findUser;

};

export const createUserService = async (userData: UserDto, credentialData: CredentialDto): Promise<IUser> => {

    const credentials: number = await createCredentialsService(credentialData.username, credentialData.password);

    const newUser: IUser = {
        id,
        name: userData.name,
        dni: userData.dni,
        credentialsId: credentials,
    };

    users.push(newUser);

    id++;

    return newUser;

};