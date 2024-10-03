import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ganditocapo3",
    database: "lavueltalogistica",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);