import { DataSource, Repository } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ganditocapo3",
    database: "prueba",
    synchronize: true,
    logging: false,
    entities: [User, Credential, Vehicle],
    subscribers: [],
    migrations: [],
});

export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const CredentialModel: Repository<Credential> = AppDataSource.getRepository(Credential);
export const VehicleModel: Repository<Vehicle> = AppDataSource.getRepository(Vehicle);