import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials",
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20,
    })
    username: string;

    @Column({
        length: 20,
    })
    password: string;
};