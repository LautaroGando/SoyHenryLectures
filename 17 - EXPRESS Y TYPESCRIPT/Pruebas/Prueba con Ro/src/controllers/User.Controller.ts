import { Request, Response } from "express";
import { User } from "../entities/User";
import { createUserService, getAllUsersService, getUserByIdService, getUserByNameService } from "../services/User.Service";

export const getAllUsers = async (req: Request, res: Response) => {

    const users: User[] = await getAllUsersService();

    try {

        res.status(200).json(users);
        
    } catch (err) {
      
        res.status(500).json(err);

    };

};

export const getUserById = async (req: Request, res: Response) => {

    const {id} = req.params;

    const user: User | null = await getUserByIdService(Number(id));

    try {

        res.status(200).json(user);
        
    } catch (err) {
      
        res.status(500).json(err);

    };
    
};

export const getUserByName = async (req: Request, res: Response) => {

    const {name} = req.body;

    const user: User | null = await getUserByNameService(name);

    try {

        res.status(200).json(user);
        
    } catch (err) {
      
        res.status(500).json(err);

    };
    
};

export const createUser = async (req: Request, res: Response) => {

    const {name, birthdate, email, dni, username, password} = req.body;

    const newUser: User = await createUserService({name, birthdate, email, dni}, {username, password});

    try {

        res.status(201).json(newUser);
        
    } catch (err) {
      
        res.status(500).json(err);

    };

};