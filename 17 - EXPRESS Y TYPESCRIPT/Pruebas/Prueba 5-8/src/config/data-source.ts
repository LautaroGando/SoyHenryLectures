import { DataSource } from "typeorm";
import { User } from "../entitites/User";
import { Credential } from "../entitites/Credential";
import { Appointment } from "../entitites/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ganditocapo3",
    database: "prueba_final",
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [Credential, User, Appointment],
    subscribers: [],
    migrations: [],
});