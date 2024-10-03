import { PORT } from "./config/envs";
import app from "./server";
import { AppDataSource } from "./config/data-source";

const initialize = async () => {

    await AppDataSource.initialize();

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}.`);

    });

};

initialize();