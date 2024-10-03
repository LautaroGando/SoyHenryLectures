import { ICredentials } from "../interfaces/ICredential";

const credentials: ICredentials[] = [];

let id: number = 1;

export const createCredentialsService = async (username: string, password: string): Promise<number> => {

    const newCredential: ICredentials = {
        id,
        username: username,
        password: password,
    };

    credentials.push(newCredential);

    id++;

    return newCredential.id;

};

export const checkCredentials = async (username: string, password: string): Promise<number | undefined> => {

    const checkCredentials: ICredentials | undefined = credentials.find((credential: ICredentials) => {

        if (username === credential.username) {

            if (password === credential.password) return credential;

        };

    });

    return checkCredentials?.id;

};