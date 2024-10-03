import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

export const appointmentRepository: Repository<Appointment> = AppDataSource.getRepository(Appointment);