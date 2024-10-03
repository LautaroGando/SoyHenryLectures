"use client";

import AuthForm from "@/components/AuthForm/AuthForm";
import NavBar from "@/components/NavBar/NavBar";
import Products from "@/components/Products/Products";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (

    <main className={styles.main}>
      <div>
        <NavBar token={token} setToken={setToken}/>
        {token ? <Products /> : <AuthForm token={token} setToken={setToken}/>}
      </div>
    </main>

  )

};