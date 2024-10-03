import styles from "./NavBar.module.css"

const NavBar = () => {

  return (

    <header className={styles.header}>
        <img src="https://lh3.googleusercontent.com/MxqAAjte5yQsQD0cC73SBVJuH6kX9F-fQ1X97VecyhGHGpixcT1ce7OftVuDufTSVIG_gY233437bOmw1AZFpg1Har4t5sP1jDo4GAX_so38dg=e365-w261" />
        <nav>
            <ul>
                <li>
                    <a href="">INICIO</a>
                </li>
            </ul>
        </nav>
    </header>

  )

}

export default NavBar