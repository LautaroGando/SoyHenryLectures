"use client";

import React from 'react';
import styles from "./NavBar.module.css";

const NavBar = ({token, setToken}) => {

    const logoutHandler = () => {

        setToken(null);

        localStorage.clear();

    };

    return (

        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>My Shopping App</h1>
            </div>
            <div>
                {token ? (
                    <button onClick={logoutHandler} type='submit'>Logout</button>
                ) : null}
            </div>
        </div>

    )

};

export default NavBar;