import { useState } from 'react';
import styles from './Register.module.css';
import validate from '../../helpers/validateRegister';

const Register = () => {

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: "El nombre completo es requerido.",
        username: "El nombre de usuario es requerido.",
        password: "La contraseña es requerida.",
    });

    const handleOnChange = (event) => {

        const {name, value} = event.target;

        setUserData({...userData, [name]: value});
        setErrors(validate({...userData, [name]: value}));
    
    };

    const handleOnSubmit = (event) => {

        event.preventDefault();

    };

    const formIsValid = Object.keys(errors).every(key => !errors[key]);

    return (

        <form className={styles.formRegister} onSubmit={handleOnSubmit}>
            <h2>Registrate</h2>
            <div>
                <label htmlFor="name"></label>
                <input onChange={handleOnChange} type="text" name="name" id="name" value={userData.name} placeholder='Nombre Completo' />
                <span>{errors.name}</span>
            </div>
            <div>
                <label htmlFor="username"></label>
                <input onChange={handleOnChange} type="text" name="username" id="username" value={userData.username} placeholder='Nombre de Usuario'/>
                <span>{errors.username}</span>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input onChange={handleOnChange} type="password" name="password" id="password" value={userData.password} placeholder='Contraseña'/>
                <span>{errors.password}</span>
            </div>
            <button disabled={!formIsValid ? true : false}>REGISTRARSE</button>
        </form>

    )

}

export default Register;