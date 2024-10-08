import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(router);

export default app;