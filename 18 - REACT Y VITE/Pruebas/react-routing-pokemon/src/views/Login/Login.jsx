import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './Login.module.css';
import validateLogin from "../../helpers/validateLogin";

const Login = () => {

    return (

        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validate={validateLogin}
            onSubmit={() => alert("Inicio de sesión exitoso.")}
        >
            <Form className={styles.form}>
                <div>
                    <h2>PokeFormulario de Inicio de Sesión:</h2>
                    <Field type="text" name="username" placeholder="Nombre de Usuario"/>
                    <span className={styles.error}><ErrorMessage name='username'/></span>

                    <Field type="password" name="password" placeholder="Contraseña"/>
                    <span className={styles.error}><ErrorMessage name='password'/></span>

                    <button type='submit'>INICIAR SESIÓN</button>
                </div>
            </Form>
        </Formik>

    );

};

export default Login;