import { PORT } from "./config/envs";
import app from "./server";
import { preloadAllData } from "./helpers/preloadData";
import { AppDataSource } from "./config/data-source";

const initialice: Function = async (): Promise<void> => {

    await AppDataSource.initialize();

    await preloadAllData();

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}!`);
        
    });

};

initialice();