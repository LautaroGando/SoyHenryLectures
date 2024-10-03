import { CredentialModel } from "../config/data-source";
import { CredentialDto } from "../dtos/CredentialDto";
import { Credential } from "../entities/Credential";

export const createCredentialsService = async (credentialData: CredentialDto): Promise<Credential> => {

    const credentials: Credential = await CredentialModel.create(credentialData);

    await CredentialModel.save(credentials);

    return credentials;

};