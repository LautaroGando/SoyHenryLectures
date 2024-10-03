import styles from "./NavBar.module.css";

const NavBar = () => {

    return (

        <header className={styles.header}>
            <label htmlFor="check">
                <span></span>
            </label>
            <input type="checkbox" name="" id="check" />
            <nav>
                <img src="https://pbs.twimg.com/media/CesWQMqWQAE7mh5.png" alt="" />
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                        <a href="#">REGISTRARSE</a>
                        <a href="#">INICIAR SESIÓN</a>
                    </li>
                </ul>
            </nav>
        </header>

    )

}

export default NavBar