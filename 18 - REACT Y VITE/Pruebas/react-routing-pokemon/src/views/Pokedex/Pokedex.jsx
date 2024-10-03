import styles from "./Pokedex.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [login, setLogin] = useState(true);

    useEffect(() => {

        (async () => {

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1300");

            const pokemonsData = response.data.results;

            const allPokemons = await Promise.all(

                pokemonsData.map(async (pokemon) => {

                    return await axios.get(pokemon.url);

                })

            );

            setPokemons(allPokemons);
            setLogin(false);

        })();

    }, []);

    return (

        <main className={styles.main}>
            {
                login ?
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                    </div> :
                    <div className={styles.cardContainer}>
                        {pokemons.map(pokemon => {
                            return <Link key={pokemon.data.id} to={`/pokedex/detail/${pokemon.data.id}`}>
                                <Card key={pokemon.data.id} pokemon={pokemon}/>
                            </Link>
                        })}
                    </div>
            }
        </main>

    );

};

export default Pokedex;