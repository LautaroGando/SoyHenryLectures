const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

const PORT = 3000;

dbCon().then(res => {

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto ${PORT}`);

    });

}).catch(err => {

    console.log(err);

});