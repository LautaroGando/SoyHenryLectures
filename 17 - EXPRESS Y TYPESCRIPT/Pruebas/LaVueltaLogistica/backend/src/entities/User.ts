import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
        length: 100,
    })
    surname: string;
    @Column()
    tel: string;
    @Column("integer")
    dni: number;
    @Column({
        length: 255,
    })
    email: string;
};