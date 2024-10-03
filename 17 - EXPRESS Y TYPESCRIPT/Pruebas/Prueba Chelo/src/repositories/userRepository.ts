import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export const UserRepository = AppDataSource.getRepository(User).extend({
    findById: async function (id: number): Promise<User> {

        const user: User | null = await this.findOneBy({id});

        if (!user) throw new Error("Usuario no encontrado!");

        return user;

    },
});