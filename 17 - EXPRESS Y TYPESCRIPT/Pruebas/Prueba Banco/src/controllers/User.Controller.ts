import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/User.Service";

export const getAllUsers = async (req: Request, res: Response) => {

    const users: IUser[] = await getAllUsersService();

    try {

        res.status(200).json(users);
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};

export const getUserById = async (req: Request, res: Response) => {

    const {id} = req.params;

    const userId: number = Number(id);

    const user: IUser | undefined = await getUserByIdService(userId);

    try {

        res.status(200).json(user);
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};

export const createUser = async (req: Request, res: Response) => {

    const {name, dni, credentialsId, username, password} = req.body;

    const newUser: IUser = await createUserService({name, dni, credentialsId}, {username, password});

    try {

        res.status(201).json(newUser);
        
    } catch (error) {
      
        res.status(500).json(error);

    };

};