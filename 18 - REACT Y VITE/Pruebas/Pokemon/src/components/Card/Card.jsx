import styles from "./Card.module.css"

const Card = ({ pokemon, handleOnClick }) => {

    const url = pokemon?.data?.sprites?.other?.home?.front_default;
    const name = pokemon?.data?.name;
    let id = pokemon?.data?.id;
    let idPokemon;

    if (id < 10) idPokemon = `#000${pokemon?.data?.id}`;
    else if (id < 100) idPokemon = `#00${pokemon?.data?.id}`;
    else if (id < 1000) idPokemon = `#0${pokemon?.data?.id}`;
    else if (id < 10000) idPokemon = `#${pokemon?.data?.id}`;

    return (

        <div onClick={() => handleOnClick(id)} className={styles.card}>
            <img src={url} alt="" />
            <h2>{idPokemon}</h2>
            <h2>{name}</h2>
        </div>

    )

}

export default Card