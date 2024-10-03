import { DataSource } from "typeorm"
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ganditocapo3",
    database: "repaso",
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [Credential, User, Appointment],
    subscribers: [],
    migrations: [],
});