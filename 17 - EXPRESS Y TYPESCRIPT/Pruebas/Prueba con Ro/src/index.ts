import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data.source";
import app from "./server";

AppDataSource.initialize().then(res => {

    console.log("Conectado exitosamente a la base de datos!");

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}!`);

    });
    

}).catch(err => {

    console.log(err);

});