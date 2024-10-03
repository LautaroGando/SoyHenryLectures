import { Request, Response } from "express";
import { createUserService, deleteUserService, getAllUsersService, updateUserService } from "../services/userService";
import { IUser } from "../interfaces/IUser";
import { checkAsync } from "../utils/checkAsync";

const getAllUsers = async (req: Request, res: Response) => {

    const users: IUser[] = await getAllUsersService();

    res.status(200).json(users);

};

const createUser = async (req: Request, res: Response) => {

    const {name, surname, age, email, premium} = req.body;

    const newUser: IUser = await createUserService({name, surname, age, email, premium});

    res.status(201).json(newUser);

};

const updateUser = async (req: Request, res: Response) => {

    const {_id, name, surname, age, email, premium} = req.body;

    await updateUserService(_id, {name, surname, age, email, premium});

    res.status(200).json({
        message: "Usuario actualizado.",
    });

};

const deleteUser = async (req: Request, res: Response) => {

    const {_id} = req.body;

    await deleteUserService(_id);

    res.status(200).json({
        message: "Usuario eliminado",
    });

};

export const userController = {
    getAllUsers: checkAsync(getAllUsers),
    createUser: checkAsync(createUser),
    updateUser: checkAsync(updateUser),
    deleteUser: checkAsync(deleteUser),
};