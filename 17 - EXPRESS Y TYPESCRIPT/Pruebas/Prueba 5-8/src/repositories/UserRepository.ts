import { AppDataSource } from "../config/data-source";
import { User } from "../entitites/User";

export const UserRepository = AppDataSource.getRepository(User);