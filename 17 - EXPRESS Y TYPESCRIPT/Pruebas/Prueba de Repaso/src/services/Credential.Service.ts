import { Credential } from "../entities/Credential";
import { ICredential } from "../interfaces/ICredential";
import { CredentialRepository } from "../repositories/CredentialRepository";

export const createCredentialsService: Function = async (credentialData: ICredential): Promise<ICredential> => {

    const newCredential: ICredential = CredentialRepository.create(credentialData);

    return newCredential;
    
};

export const checkCredentialsService: Function = async (credentialData: Credential): Promise<Credential> => {

    const checkCredentials: Credential | null = await CredentialRepository.checkCredentials(credentialData.username, credentialData.password);

    if (checkCredentials) return checkCredentials;
    else throw new Error("Credenciales incorrectas.")

};