import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    age: number;
    @Column()
    dni: number;
    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;
}; 