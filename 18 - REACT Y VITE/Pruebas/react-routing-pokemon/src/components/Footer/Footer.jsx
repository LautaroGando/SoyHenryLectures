import styles from './Footer.module.css';

const Footer = () => {

    const date = new Date().getFullYear();

    return (

        <footer className={styles.footer}>
            <p>&copy;Copyright Pokedex {date}</p>
        </footer>

    );

};

export default Footer;