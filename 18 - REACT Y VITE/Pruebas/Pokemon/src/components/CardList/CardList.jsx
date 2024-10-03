import { useEffect, useState } from "react"
import Card from "../Card/Card"
import styles from "./CardList.module.css"
import axios from "axios";
import Detail from "../Detail/Detail";

const CardList = () => {

   const [pokemons, setPokemons] = useState([]);
   const [loading, setLoading] = useState(true);
   const [id, setId] = useState(0);
   const [detail, setDetail] = useState(false);
   
   useEffect(() => {

      (async () => {

         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000');

         const allPokemons = response.data.results;

         const pokemonData = await Promise.all(

            allPokemons.map(async (pok) => {

               return await axios.get(pok.url);

            })

         );

         setPokemons(pokemonData);
         setLoading(false);

      })();

   }, []);

   const handleOnClick = (id) => {

      setId(id);
      setDetail(true);

   };

   const handleOnClose = () => {

      setDetail(false);

      return setId(0);

   };

   return (

      <div className={styles.cardListContainer}>
         {
            loading ? (
               <div className={styles.loading}>
                  <div className={styles.spinner}></div>
               </div>
            ) : (
               pokemons.map((pokemon, index) => {
                  return <Card key={index} pokemon={pokemon} handleOnClick={handleOnClick}/>
               })
            )
         }
         {
            detail && <Detail id={id} handleOnClose={handleOnClose}/>
         }
      </div>

   )

}

export default CardList