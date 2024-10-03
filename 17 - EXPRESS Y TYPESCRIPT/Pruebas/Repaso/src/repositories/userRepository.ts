import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../config/data-source";

export const userRepository: Repository<User> = AppDataSource.getRepository(User);