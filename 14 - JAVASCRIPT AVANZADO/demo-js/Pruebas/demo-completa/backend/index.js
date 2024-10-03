require("dotenv").config();
const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

const PORT = process.env.PORT;

dbCon().then(res => {

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}`);

    });

}).catch(err => {

    console.log(err);

});