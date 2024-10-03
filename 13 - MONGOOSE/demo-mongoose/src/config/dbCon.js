const mongoose = require("mongoose");

const dbCon = async () => {

    // Realizar la conexion con la base de datos
    await mongoose.connect("mongodb+srv://lautarogandodev:G8tRt7aIFY80kWkz@homework10.zduujl8.mongodb.net/");

};

module.exports = dbCon;