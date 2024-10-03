import { useEffect, useState } from "react"
import styles from "./Detail.module.css"
import axios from "axios";

const Detail = ({id, handleOnClose}) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
            
            setPokemon(res.data);

        });

    }, []);

    console.log(pokemon);

    const url = pokemon?.sprites?.other?.home?.front_default;
    const name = pokemon?.name;
    const idPokemon = pokemon?.id;
    let idPokemonHashtag;

    if (idPokemon < 10) idPokemonHashtag = `#000${pokemon?.id}`;
    else if (idPokemon < 100) idPokemonHashtag = `#00${pokemon?.id}`;
    else if (idPokemon < 1000) idPokemonHashtag = `#0${pokemon?.id}`;
    else if (idPokemon < 10000) idPokemonHashtag = `#${pokemon?.id}`;

    return (

        <div className={styles.containerDetail}>
            <button onClick={handleOnClose}>❌</button>
            <div>
                <h2>{idPokemonHashtag}</h2>
                <img src={url} alt="" />
                <h2>{name}</h2>
            </div>
        </div>

    )

}

export default Detail