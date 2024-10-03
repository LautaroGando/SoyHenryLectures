import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

export const CredentialRepository = AppDataSource.getRepository(Credential).extend({
    checkCredentials: async function (username: any, password: any): Promise<Credential> {

        const user = await this.findOne({
            where: {
                username: username,
                password: password,
            },
        });

        if (user) return user;
        else throw new Error("Credenciales incorrectas.");

    },
});