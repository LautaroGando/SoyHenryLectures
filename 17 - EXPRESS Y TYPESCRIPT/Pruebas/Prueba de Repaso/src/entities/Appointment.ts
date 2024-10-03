import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { User } from "./User";

@Entity({
    name: "appointments",
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column({type: "enum", enum: AppointmentStatus, default: AppointmentStatus.ACTIVE})
    status: AppointmentStatus;

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn()
    user: User;
};