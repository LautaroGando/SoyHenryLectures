import { useState } from 'react';
import validateRegister from '../../helpers/validateRegister';
import styles from './Register.module.css';

const Register = () => {

    const initialData = {
        name: "",
        email: "",
        age: "",
        username: "",
        password: "",
    };

    const initialErrors = {
        name: "El nombre es requerido.",
        email: "El correo electrónico es requerido.",
        age: "La edad es requerida.",
        username: "El nombre de usuario es requerido.",
        password: "La contraseña es requerida.",
    }

    const [userData, setUserData] = useState(initialData);
    const [errors, setErrors] = useState(initialErrors);
    const [touchedFields, setTouchedFields] = useState({});

    const handleOnChange = (event) => {

        const { name, value } = event.target;

        setUserData({ ...userData, [name]: value });
        setErrors(validateRegister({ ...userData, [name]: value }));

    };

    const handleOnSubmit = (event) => {

        event.preventDefault();

        if (Object.keys(errors).length === 0) {

            alert("Usuario registrado.");

        };

    };

    const handleOnFocus = (event) => {

        const { name } = event.target;

        setTouchedFields({ ...touchedFields, [name]: true });

    };

    const formIsValid = Object.keys(errors).every((key) => !errors[key]);

    return (

        <form onSubmit={handleOnSubmit} className={styles.form}>
            <h2>REGÍSTRATE</h2>

            <label>NOMBRE:</label>
            <input
                onFocus={handleOnFocus}
                onChange={handleOnChange}
                type="text"
                name="name"
                value={userData.name}
                placeholder="Jhon Doe"
            />
            {touchedFields.name && (
                <span className={errors.name ? styles.errorMessage : styles.success}>
                    {errors.name || "Nombre válido."}
                </span>
            )}

            <label>CORREO ELECTRÓNICO:</label>
            <input
                onFocus={handleOnFocus}
                onChange={handleOnChange}
                type="email"
                name="email"
                value={userData.email}
                placeholder="email@mail.com"
            />
            {touchedFields.email && (
                <span className={errors.email ? styles.errorMessage : styles.success}>
                    {errors.email || "Correo Electrónico válido."}
                </span>
            )}

            <label>EDAD:</label>
            <input
                onFocus={handleOnFocus}
                onChange={handleOnChange}
                type="number"
                name="age"
                value={userData.age}
                placeholder="20"
            />
            {touchedFields.age && (
                <span className={errors.age ? styles.errorMessage : styles.success}>
                    {errors.age || "Edad válida."}
                </span>
            )}

            <label>NOMBRE DE USUARIO:</label>
            <input
                onFocus={handleOnFocus}
                onChange={handleOnChange}
                type="text"
                name="username"
                value={userData.username}
                placeholder="jhonDoe"
            />
            {touchedFields.username && (
                <span className={errors.username ? styles.errorMessage : styles.success}>
                    {errors.username || "Usuario válido."}
                </span>
            )}

            <label>CONTRASEÑA:</label>
            <input
                onFocus={handleOnFocus}
                onChange={handleOnChange}
                type="password"
                name="password"
                value={userData.password}
                placeholder="*******"
            />
            {touchedFields.password && (
                <span className={errors.password ? styles.errorMessage : styles.success}>
                    {errors.password || "Contraseña válida."}
                </span>
            )}

            <button disabled={!formIsValid} type="submit">
                REGISTRARSE
            </button>
        </form>
    );

};

export default Register;

{/* <Formik
            initialValues={{ name: "", email: "", age: "", username: "", password: "" }}
            validate={validateRegister}
            onSubmit={() => { alert("Registrado con éxito.") }}
        >
            <Form className={styles.form}>
                <h2>REGISTRATE</h2>
                <label htmlFor="">NOMBRE:</label>
                <Field type="text" name="name" placeholder="Jhon Doe" />
                <span className={styles.errorMessage}>
                    <ErrorMessage styles={{ color: "red" }} name='name' />
                </span>
                <label htmlFor="">CORREO ELECTRÓNICO:</label>
                <Field type="email" name="email" placeholder="email@mail.com" />
                <span className={styles.errorMessage}>
                    <ErrorMessage name='email' />
                </span>
                <label htmlFor="">EDAD:</label>
                <Field type="number" name="age" placeholder="20" />
                <span className={styles.errorMessage}>
                    <ErrorMessage name='age' />
                </span>
                <label htmlFor="">NOMBRE DE USUARIO:</label>
                <Field type="text" name="username" placeholder="jhonDoe" />
                <span className={styles.errorMessage}>
                    <ErrorMessage name='username' />
                </span>
                <label htmlFor="">CONTRASEÑA:</label>
                <Field type="password" name="password" placeholder="*******" />
                <span className={styles.errorMessage}>
                    <ErrorMessage name='password' />
                </span>

                <button type='submit'>REGISTRARSE</button>
            </Form>
        </Formik> */}