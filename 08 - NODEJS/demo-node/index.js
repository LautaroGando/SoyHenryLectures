const Repository = require("./models/Repository");

const repository = new Repository();

repository.createActivity("Salir a pasear", "Es muy bueno para la salud");
repository.createActivity("Jugar al futbol", "Argentina campeon del mundo");
repository.createActivity("Salir a bailar", "Cuidado no beber si conduces");

console.log(repository.getAllActivities());