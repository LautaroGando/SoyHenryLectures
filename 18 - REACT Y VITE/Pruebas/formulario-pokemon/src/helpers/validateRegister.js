const regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    username: /^[a-zA-Z0-9]{3,16}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const validateRegister = (input) => {

    const errors = {};

    if (!input.name.trim().includes(" ")) {

        errors.name = "El nombre completo debe tener al menos dos palabras.";

    };

    if (!regex.email.test(input.email)) {

        errors.email = "El correo electrónico es invalido.";

    };

    if (input.age <= 1 || input.age >= 100) {

        errors.age = "La edad debe ser mayor a 1 y menor a 100";

    };

    if (!regex.username.test(input.username)) {

        errors.username = "El nombre usuario tiene que tener entre 3 y 16 caracteres.";

    };

    if (!regex.password.test(input.password)) {

        errors.password = "La clave debe contener al menos 8 caracteres, una mayuscula, un simbolo y un numero.";

    };

    return errors;

};

export default validateRegister;