import { ICredential } from "../interfaces/ICredential";
import { CredentialRepository } from "../repositories/credentialRepository";

export const createCredentialService = async (credentialData: ICredential) => {

    const newCredentials = CredentialRepository.create(credentialData);

    return newCredentials;

};

export const checkCredentialService = async (credentialData: ICredential) => {

    const checkCredential = await CredentialRepository.findOne({
        where: {
            username: credentialData.username,
            password: credentialData.password,
        },
    });

    if (checkCredential) return checkCredential;
    else throw new Error("Credenciales incorrectos.");

};