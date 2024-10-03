import { Request, Response } from "express"
import { User } from "../entities/User";
import { createUserService, getAllUsersService, getUserByIdService, getUserByNameService } from "../services/User.Service";

export const getAllUsers = async (req: Request, res: Response) => {

    const users: User[] = await getAllUsersService();

    res.status(200).json(users);

};

export const getUserById = async (req: Request, res: Response) => {

    const {id} = req.params;

    const user: User | null = await getUserByIdService(Number(id));

    res.status(200).json(user);

};

export const getUserByName = async (req: Request, res: Response) => {

    const {name} = req.body;

    const user: User | null = await getUserByNameService(String(name));

    res.status(200).json(user);

};

export const createUser = async (req: Request, res: Response) => {

    const {name, email, age, dni, username, password} = req.body;

    const newUser: User = await createUserService({name, email, age, dni}, {username, password});

    res.status(201).json(newUser);
        
};