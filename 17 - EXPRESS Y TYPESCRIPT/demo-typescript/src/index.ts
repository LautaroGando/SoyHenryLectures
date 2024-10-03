import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadUserData, preloadVehiclesData } from "./helpers/preloadData";

/* AppDataSource.initialize().then(res => {

    console.log(`Conexion a la base de datos realizada con exito.`);

    preloadData().then(res => {

        server.listen(PORT, () => {

            console.log(`Server listening on port ${PORT}`);
            
        });

    });

}); */

const initializeApp = async () => {

    await AppDataSource.initialize();

    await preloadUserData();

    await preloadVehiclesData();

    server.listen(PORT, () => {

        console.log(`Server listening on port: ${PORT}.`);

    });

};

initializeApp();