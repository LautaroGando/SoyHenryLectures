import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    const isActive = (pathname) => location.pathname === pathname;

    return (

        <header className={styles.header}>
            <nav>
                <img src="https://lh3.googleusercontent.com/MxqAAjte5yQsQD0cC73SBVJuH6kX9F-fQ1X97VecyhGHGpixcT1ce7OftVuDufTSVIG_gY233437bOmw1AZFpg1Har4t5sP1jDo4GAX_so38dg=e365-w261" alt="" />
                <ul>
                    <li>
                        <Link className={isActive("/home") ? styles.active : null} to={'/home'}>Inicio</Link>
                    </li>
                    <li>
                        <Link className={isActive("/pokedex") ? styles.active : null} to={'/pokedex'}>Pokedex</Link>
                    </li>
                    <li>
                        <Link className={isActive("/register") ? styles.active : null} to={'/register'}>Registrarse</Link>
                    </li>
                    <li>
                        <Link className={isActive("/login") ? styles.active : null} to={'/login'}>Iniciar Sesión</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );

};

export default Header;