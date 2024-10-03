import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { getUsersService, createUserService, deleteUserService, getUserByIdService } from "../services/usersService";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {

    const users: User[] = await getUsersService();

    res.status(200).json(users);

};

export const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user: User | null = await getUserByIdService(Number(id));

    res.status(200).json(user);

};

export const createUser = async (req: Request, res: Response) => {

    const { name, email, age, active } = req.body;

    try {

        const newUser: User = await createUserService({ name, email, age, active });

        res.status(201).json(newUser);

    } catch (error) {

        res.status(400).json({
            error: "No se pudo crear el usuario!",
        });

    };

};

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.body;

    await deleteUserService(id);

    res.status(200).json({
        message: "Eliminado correctamente",
    });

};