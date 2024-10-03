import "dotenv/config";
import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.PORTDB),
    username: process.env.USERNAMEDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [Credential, User],
    subscribers: [],
    migrations: [],
})