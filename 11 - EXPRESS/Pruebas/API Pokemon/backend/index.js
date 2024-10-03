const app = require("./src/server");

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`El servidor esta corriendo en el puerto ${PORT}`);

});