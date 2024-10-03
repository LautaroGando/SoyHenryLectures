import { useState } from 'react';
import styles from './Register.module.css';
import validateRegister from '../../helpers/validateRegister';
import users from '../../helpers/users';

const Register = () => {

    const initialUserData = {
        name: "",
        age: "",
        email: "",
        username: "",
        password: "",
    };

    const initialErrors = {
        name: "El Nombre Completo es requerido.",
        age: "La edad es requerida.",
        email: "El Correo Electrónico es requerido.",
        username: "El Nombre de Usuario es requerido.",
        password: "La Contraseña es requerida.",
    };

    const [userData, setUserData] = useState(initialUserData);
    const [errors, setErrors] = useState(initialErrors);
    const [touch, setTouch] = useState({});

    const handleOnChange = (event) => {

        const { name, value } = event.target;

        setUserData({ ...userData, [name]: value });
        setErrors(validateRegister({ ...userData, [name]: value }));

    };

    const handleOnFocus = (event) => {

        const { name } = event.target;

        setTouch({ ...touch, [name]: true });

    };

    const handleOnSubmit = (event) => {

        event.preventDefault();

        setUserData(initialUserData);

    };

    const handleOnClick = (user) => {

        users.push(user);

    };

    const isFormValid = Object.keys(errors).every(key => !errors[key]);

    return (

        <form onSubmit={handleOnSubmit} className={styles.form}>
            <div>
                <h2>PokeFormulario de Registro:</h2>

                <label htmlFor="name"></label>
                <input onFocus={handleOnFocus} onChange={handleOnChange} type="text" name="name" id="name" value={userData.name} placeholder='Nombre Completo' />
                {touch.name && <span className={errors.name ? styles.error : styles.success}>{errors.name || "✅ Nombre completo válido."}</span>}

                <label htmlFor="age"></label>
                <input onFocus={handleOnFocus} onChange={handleOnChange} type="number" name="age" id="age" value={userData.age} placeholder='Edad' />
                {touch.age && <span className={errors.age ? styles.error : styles.success}>{errors.age || "✅ Edad válida."}</span>}

                <label htmlFor="email"></label>
                <input onFocus={handleOnFocus} onChange={handleOnChange} type="email" name="email" id="email" value={userData.email} placeholder='Correo Electrónico' />
                {touch.email && <span className={errors.email ? styles.error : styles.success}>{errors.email || "✅ Correo Electrónico válido."}</span>}

                <label htmlFor="username"></label>
                <input onFocus={handleOnFocus} onChange={handleOnChange} type="text" name="username" id="username" value={userData.username} placeholder='Nombre de Usuario' />
                {touch.username && <span className={errors.username ? styles.error : styles.success}>{errors.username || "✅ Nombre de Usuario válido."}</span>}

                <label htmlFor="password"></label>
                <input onFocus={handleOnFocus} onChange={handleOnChange} type="password" name="password" id="password" value={userData.password} placeholder='Contraseña' />
                {touch.password && <span className={errors.password ? styles.error : styles.success}>{errors.password || "✅ Contraseña válida."}</span>}

                <button disabled={!isFormValid ? true : false} onClick={() => handleOnClick(userData)}>REGISTRARSE</button>
            </div>
        </form>

    );

};

export default Register;