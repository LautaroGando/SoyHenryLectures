import { CredentialModel } from "../config/data.source";
import { CredentialDto } from "../dtos/CredentialDto";
import { Credential } from "../entities/Credential";

export const createCredentialsService = async (credentialData: CredentialDto): Promise<Credential> => {

    const newCredentials: Credential = CredentialModel.create(credentialData);

    await CredentialModel.save(newCredentials);

    return newCredentials;

};