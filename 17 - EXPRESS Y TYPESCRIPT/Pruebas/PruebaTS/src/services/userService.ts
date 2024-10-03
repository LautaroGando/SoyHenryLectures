import { UserDto } from "../dtos/UserDto";
import { IUser } from "../interfaces/IUser";
import User from "../models/User";

let _id = 1;

export const getAllUsersService = async (): Promise<IUser[]> => {

    const users: IUser[] = await User.find();

    return users;

};

export const createUserService = async (userData: UserDto): Promise<IUser> => {

    const newUser: IUser = await User.create({_id, ...userData});

    _id++

    return newUser;

};

export const updateUserService = async (_id: number, userData: UserDto): Promise<IUser | null> => {

    let user: IUser | null = await User.findByIdAndUpdate(_id, userData);

    return user;

};

export const deleteUserService = async (_id: number): Promise<number | null> => {

    const deleteUser: number | null = await User.findByIdAndDelete(_id);

    return deleteUser;

};