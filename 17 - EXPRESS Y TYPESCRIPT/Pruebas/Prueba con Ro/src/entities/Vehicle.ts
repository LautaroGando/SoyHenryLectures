import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { vehicleCondition } from "../enums/vehicleCondition";

@Entity({
    name: "vehicles",
})
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
    })
    brand: string;

    @Column({
        length: 30,
    })
    color: string;

    @Column("integer")
    year: number;

    @Column({type: "enum", enum: vehicleCondition, default: vehicleCondition.HEALTY})
    status: vehicleCondition;

    @ManyToOne(() => User, (user) => user.vehicles)
    @JoinColumn()
    user: User;

};