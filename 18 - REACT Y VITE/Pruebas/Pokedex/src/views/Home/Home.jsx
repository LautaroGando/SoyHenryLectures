import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Card from "../../components/Card/Card";
import Detail from "../../components/Detail/Detail";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";

const Home = () => {

    /* DEFINIMOS LOS ESTADOS */
    /* Estado de personajes */
    const [characters, setCharacters] = useState([]);
    /* Estado para ver los detalles */
    const [detail, setDetail] = useState(false);
    /* Estado para definir id */
    const [id, setId] = useState(0);
    const [house, setHouse] = useState("");

    /* NOS CONECTAMOS A LA API MEDIANTE USEEFFECT */
    useEffect(() => {
        axios.get(`https://hp-api.onrender.com/api/characters`).then(res => setCharacters(res.data));

        return () => setId(0);
    }, []);

    useEffect(() => {
        axios.get(`https://hp-api.onrender.com/api/characters`).then(res => {

            if (house) setCharacters(res.data.filter(character => character.house === house));
            else setCharacters(res.data);

        });
    }, [house]);

    /* FUNCIÓN PARA ABRIR EL DETALLE POR ID */
    const handleOnClick = (id) => {

        setId(id);
        setDetail(true);
        
    };

    /* FUNCIÓN PARA CERRAR EL DETALLE */
    const handleOnClose = () => {

        setDetail(false);

    };

    const handleHouse = (houseParam) => {

        setHouse(houseParam);

    };

    const handleResetHouse = () => {

        setHouse("");

    };

    return (

        <div className={styles.container}>
            {/* MAPEAMOS LOS PERSONAJES, PARA MOSTRAR LA CARD */}
            <Button house={house} handleHouse={handleHouse} handleResetHouse={handleResetHouse}/>
            {
                characters.map(character => {
                    return <Card key={character.id} character={character} handleOnClick={handleOnClick}/>
                })
            }
            {/* SI EXISTE EL DETALLE LO MOSTRAMOS */}
            {
                detail && <Detail id={id} handleOnClose={handleOnClose}/>
            }
        </div>

    )

}

export default Home