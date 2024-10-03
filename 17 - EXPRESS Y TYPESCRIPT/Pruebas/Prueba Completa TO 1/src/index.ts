import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import app from "./server";

AppDataSource.initialize().then(res => {

    console.log("Conectado a la base de datos exitosamente!");
    
    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto ${PORT}!`);

    });


}).catch(err => {

    console.log(err);

});