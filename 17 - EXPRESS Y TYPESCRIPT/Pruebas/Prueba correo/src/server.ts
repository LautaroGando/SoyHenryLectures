import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {

    res.status(err.statusCode || 500).json({
        message: err.message,
    });

});

export default app;