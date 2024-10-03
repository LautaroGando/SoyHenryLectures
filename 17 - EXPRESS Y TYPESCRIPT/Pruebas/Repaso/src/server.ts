import express, {Express, NextFunction, Request, Response} from "express";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {

    res.status(err.statusCode || 500).json({
        error: err.message,
    });

});

export default app;