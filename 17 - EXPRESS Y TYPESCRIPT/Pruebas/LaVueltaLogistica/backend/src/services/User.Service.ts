import { UserModel } from "../config/data-source";
import { UserDto } from "../dtos/UserDto";
import { User } from "../entities/User";

export const getAllUsersService = async (): Promise<User[]> => {

    const users: User[] = await UserModel.find();

    return users;

};

export const createUserService = async (userData: UserDto) => {

    const newUser: User = await UserModel.create(userData);

    await UserModel.save(newUser);

    return newUser;

};