import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ganditocapo3",
    database: "demo_typeorm",
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Vehicle],
    subscribers: [],
    migrations: [],
});