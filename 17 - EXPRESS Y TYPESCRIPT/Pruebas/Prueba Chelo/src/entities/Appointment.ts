import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { AppointmentStatus } from "../enums/AppointmentStatus";

@Entity({
    name: "appointments",
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({type: "enum", enum: AppointmentStatus, default: AppointmentStatus.ACTIVE})
    status: AppointmentStatus;

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn()
    user: User;
};