import { CredentialDto } from "../dtos/Credential.Dto";
import { Credential } from "../entities/Credential";
import { CredentialRepository } from "../repositories/Credential.Repository";

export const createCredentialsService = async (credentialData: CredentialDto): Promise<Credential> => {

    const newCredentials: Credential = CredentialRepository.create(credentialData);

    await CredentialRepository.save(newCredentials);

    return newCredentials;

};

export const checkCredentialsService = async (credentialData: CredentialDto): Promise<Credential | undefined> => {

    const credentials: Credential | null = await CredentialRepository.findOne({
        where: {
            username: credentialData.username,
            password: credentialData.password,
        },
    });

    if (credentials) {

        return credentials;

    };

};