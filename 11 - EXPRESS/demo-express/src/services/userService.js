const users = [
    {
        id: 1,
        name: "Lautaro",
    },
    {
        id: 2,
        name: "Rocio",
    },
    {
        id: 3,
        name: "Agustin",
    },
];

let id = 4;

module.exports = {
    getUsers: async () => {

        // Consultar a una base de datos.
        // Realizar una solicitud a un servicio externo.
        // Leeran la informacion de un archivo.

        return users;

    },
    createUser: async (name) => {

        const newUser = {
            id,
            name,
        };

        id++;

        users.push(newUser);

    },
};