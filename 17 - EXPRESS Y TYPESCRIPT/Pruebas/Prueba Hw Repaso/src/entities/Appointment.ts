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

    @Column({
        length: 5,
    })
    time: string;

    @Column({type: "enum", enum: AppointmentStatus, default: AppointmentStatus.CANCELLED})
    status: AppointmentStatus;

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn()
    userId: User;
};