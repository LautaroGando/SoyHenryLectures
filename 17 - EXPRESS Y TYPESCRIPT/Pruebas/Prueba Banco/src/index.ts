import { PORT } from "./config/envs";
import app from "./server";

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto ${PORT}.`);

});