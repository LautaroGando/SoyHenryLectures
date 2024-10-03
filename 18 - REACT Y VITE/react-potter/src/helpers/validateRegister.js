const regex = {
    username: /^[a-zA-Z0-9]{3,16}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const validate = (input) => {

    const errors = {};

    if (!input.name.trim().includes(" ")) {

        errors.name = "El nombre completo debe contener minimo 2 palabras.";

    };

    if (!regex.username.test(input.username)) {

        errors.username = "El nombre de usuario debe contener entre 3 a 16 digitos.";

    };

    if (!regex.password.test(input.password)) {

        errors.password = "La contraseña debe tener como minimo 8 digitos, debe contener una mayuscula, un numero y un caracter especial.";

    };

    return errors;
    
};

export default validate;