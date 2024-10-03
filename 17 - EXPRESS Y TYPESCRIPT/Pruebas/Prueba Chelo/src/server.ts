import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {

    res.status(err.statusCode || 500).json({
        error: err.message,
    });

});

export default app;