import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Vehicle } from "./Vehicle";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column({
        type: Date,
    })
    birthdate: Date;

    @Column({
        length: 150,
    })
    email: string;

    @Column("integer")
    dni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
    @JoinColumn()
    vehicles: Vehicle[];
    
};