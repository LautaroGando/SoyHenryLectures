import { NextFunction, Request, Response } from "express";

export const checkAsync = (controller: Function) => {

    return (req: Request, res: Response, next: NextFunction) => {

        controller(req, res).catch((err: any) => next(err));

    };

};