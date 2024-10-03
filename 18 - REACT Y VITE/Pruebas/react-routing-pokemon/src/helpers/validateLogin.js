import users from "./users";

const validateLogin = (input) => {

    const errors = {};

    const user = users.find(user => user.username === input.username);

    if (!user) errors.username = "Usuario incorrecto.";
    else if (user.password !== input.password) errors.password = "Contraseña incorrecta.";

    return errors;

};

export default validateLogin;