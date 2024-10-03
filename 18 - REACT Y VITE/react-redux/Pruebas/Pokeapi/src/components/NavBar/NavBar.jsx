import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {

    return (

        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/pokedex"}>Pokedex</Link>
                </li>
                <li>
                    <Link to={"/register"}>Registrarse</Link>
                </li>
                <li>
                    <Link to={"/login"}>Iniciar Sesión</Link>
                </li>
            </ul>
        </nav>

    )

};

export default NavBar;