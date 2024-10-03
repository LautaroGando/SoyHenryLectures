"use client";

import React, { useState } from 'react';
import styles from "./AuthForm.module.css";

const AuthForm = ({token, setToken}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const inputHandler = (e) => {

        const {name, value} = e.target;

        setUserData({
            ...userData,
            [name]: value,
        });

    };

    const submitHandler = (e) => {

        e.preventDefault();

        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((json) => {

                console.log(json);

                setToken(json.token);

                localStorage.setItem("userToken", json.token);

            })
            .catch((err) => console.log(err));

    };

    return (

        <div className={styles.container}>
            <h1>Login</h1>

            <form onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                    <label htmlFor="username">Username: </label>
                    <input onChange={inputHandler} type="text" name='username' value={userData.username} required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password: </label>
                    <input onChange={inputHandler} type="password" name='password' value={userData.password} required />
                </div>
                <div className={styles.buttonContainer}>
                    <button>Login</button>
                </div>
            </form>
        </div>

    )

};

export default AuthForm;