import { AppDataSource } from "../config/data-source";
import { Credential } from "../entitites/Credential";

export const CredentialRepository = AppDataSource.getRepository(Credential);