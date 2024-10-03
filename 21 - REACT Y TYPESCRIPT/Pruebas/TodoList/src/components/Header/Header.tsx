import React from 'react';
import styles from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => {

    return (

        <header className={styles.header}>
            <h2>TodoList</h2>
        </header>

    )

};

export default Header;