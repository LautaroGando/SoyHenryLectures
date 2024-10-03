import "dotenv/config"
import { DataSource, Repository } from "typeorm";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.PORTDB),
    username: process.env.USERNAMEDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
    synchronize: true,
    logging: true,
    /* dropSchema: true, */
    entities: [Credential, User, Vehicle],
    subscribers: [],
    migrations: [],
});

export const CredentialModel: Repository<Credential> = AppDataSource.getRepository(Credential);
export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const VehicleModel: Repository<Vehicle> = AppDataSource.getRepository(Vehicle);