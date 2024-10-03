import app from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";
import { preloadAll } from "./helpers/preloadData";

const initialice: Function = async (): Promise<void> => {

    await AppDataSource.initialize().then(res => {

        console.log("Conectado a la base de datos exitosamente.");

    }).catch(err => {

        console.log(err);

    });

    await preloadAll();

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}.`);

    });

};

initialice();