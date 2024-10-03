import { Request, Response } from "express"
import { createUserService, getAllUsersService } from "../services/User.Service";
import { User } from "../entities/User";

export const getAllUsers = async (req: Request, res: Response) => {

    const users: User[] = await getAllUsersService();

    res.status(200).json(users);

};

export const createUser = async (req: Request, res: Response) => {

    const {name, surname, tel, dni, email} = req.body;

    const newUser: User = await createUserService({name, surname, tel, dni, email});

    res.status(201).json(newUser);

};