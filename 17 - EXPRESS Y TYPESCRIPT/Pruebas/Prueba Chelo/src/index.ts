import { AppDataSource } from "./config/data-source";
import app from "./server";
import { PORT } from "./config/envs";
import { preloadAllData } from "./helpers/preloadData";

const initialice = async () => {

    await AppDataSource.initialize();

    await preloadAllData();

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}.`);

    });

};

initialice();