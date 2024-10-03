import axios from "axios";
import { useEffect, useState } from "react"
import styles from "./Detail.module.css";

const Detail = ({ id, handleOnClose }) => {

    /* DEFINIMOS EL ESTADO PARA RECIBIR UN PERSONAJE */
    const [character, setCharacter] = useState(null);

    /* DEFINIMOS EL EFECTO PARA TRAERNOS DE LA API UN PERSONAJE POR ID */
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://hp-api.onrender.com/api/character/${id}`).then(res => setCharacter(res.data[0]));
        }, 2000);
    }, []);

    return (

        <div className={styles.modal}>
            {
                character === null ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                    </div>
                ) : (
                    <>
                        <h2>{character.name}</h2>
                        <img className={styles.image} src={character.image} alt="" />
                        <h4>{character.house}</h4>
                        <button className={styles.button} onClick={handleOnClose}>❌</button>
                    </>
                )
            }
        </div>

    )

}

export default Detail