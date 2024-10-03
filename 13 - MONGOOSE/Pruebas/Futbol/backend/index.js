const dbCon = require("./src/config/dbCon");
const app = require("./src/server");

const PORT = 3000;

dbCon().then(res => {

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto ${PORT}`);

    });

}).catch(error => {

    console.log(error);

});