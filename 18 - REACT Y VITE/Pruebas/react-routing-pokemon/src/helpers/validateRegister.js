const regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    username: /^[a-zA-Z0-9]{3,16}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const validateRegister = (input) => {

    const errors = {};

    if (!input.name.trim().includes(" ")) errors.name = "❌ El nombre completo debe contener mínimo 2 palabras.";

    if (input.age <= 0 || input.age >= 100) errors.age = "❌ La edad debe ser mayor a 0 y menor a 100.";

    if (!regex.email.test(input.email)) errors.email = "❌ Correo electrónico no válido";

    if (!regex.username.test(input.username)) errors.username = "❌ El usuario debe contener entre 3 a 16 carácteres";

    if (!regex.password.test(input.password)) errors.password = "❌ La contraseña debe contener mínimo 8 dígitos, un número, un caracter especial y una mayúscula";

    return errors;

};

export default validateRegister;