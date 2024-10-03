import { PORT } from "./config/envs";
import app from "./server";
import { dbCon } from "./config/dbCon";

dbCon().then(res => {

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}!`);

    });

}).catch(err => {

    console.log(err);

});