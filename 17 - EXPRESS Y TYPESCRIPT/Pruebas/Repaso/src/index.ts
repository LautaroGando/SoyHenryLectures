import app from "./server";
import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import { allDataPreload } from "./helpers/preloadData";

const initialice = async () => {

    await AppDataSource.initialize();

    await allDataPreload();

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}`);

    });

};

initialice();