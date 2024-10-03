import "./Detail.css";
import { useState, useEffect } from "react";

const Detail = ({ id, handleOnClose }) => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id}`).then((response) => response.json()).then((data) => setCharacter(data[0]));
    }, []);

    return (

        <div className="modalDetail">
            {
                !character ? <h2>Cargando...</h2> : (
                    <>
                        <h2>{character?.name}</h2>
                        <img style={{borderRadius: "100%", width: "150px", height: "150px"}} src={character?.        image} alt={character?.name} />
                        <br />
                        <button onClick={handleOnClose}>Cerrar</button>
                    </>
                )
            }
        </div>

    )

}

export default Detail