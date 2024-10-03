import { Request, Response } from "express";
import { loginUserService } from "../services/User.Service";

export const loginUser = async (req: Request, res: Response) => {

    const {username, password} = req.body;

    const checkLogin = await loginUserService({username, password});

    res.status(200).json(checkLogin);

};