import app from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(res => {

    console.log("Conectado a la base de datos exitosamente!");

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}!`);

    });

}).catch(err => {

    console.log(err);

});