import styles from './Detail.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {

    const [pokemon, setPokemon] = useState({});
    
    const {id} = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res.data));

    }, [id]);

    const handleOnClose = () => {

        navigate("/pokedex");

    };

    const image = pokemon?.sprites?.other?.home?.front_default;

    return (

        <main className={styles.main}>
            <button onClick={handleOnClose}>❌</button>
            <div>
                <img src={image} alt="" />
            </div>
        </main>

    );

};

export default Detail;