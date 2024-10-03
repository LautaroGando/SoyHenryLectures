import { AppDataSource } from "./config/data-source";
import app from "./server";
import { PORT } from "./config/envs";
import { preloadAllData } from "./helpers/preloadData";

const initialice: Function = async () => {

    await AppDataSource.initialize();

    preloadAllData();

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}`);

    });

};

initialice();