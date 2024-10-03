import { useState } from 'react';
import styles from './CardList.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const CardList = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000");

            const allPokemon = response.data.results;

            const pokemonData = await Promise.all(

                allPokemon.map(async (pokemon) => {

                    return await axios.get(pokemon.url);

                })

            );

            setLoading(false);
            setCharacters(pokemonData);
            
        })();

    }, []);

    return (

        <div className={styles.cardContainer}>
            {
                loading ? <h2>Cargando...</h2> : (
                    characters.map(pok => {
                        return <Card key={pok.data.id} pokemon={pok}/>
                    })
                )
            }
        </div>

    )

}

export default CardList