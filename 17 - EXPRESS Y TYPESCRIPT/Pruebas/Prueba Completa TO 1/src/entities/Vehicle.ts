import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { VehicleRegister } from "../enums/VehicleRegister";

@Entity({
    name: "entities",
})
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    car: string;
    @Column({type: "enum", enum: VehicleRegister, default: VehicleRegister.ACTIVE})
    register: VehicleRegister;
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
};