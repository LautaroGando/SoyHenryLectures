require("dotenv").config();
const dbCon = require("./src/config/dbCon");
const app = require("./src/server");

const PORT = process.env.PORT;

dbCon().then(res => {

    app.listen(PORT, () => {

        console.log(`Servidor corriendo en el puerto: ${PORT}.`);
        
    });

}).catch(err => {

    console.log(err);

});