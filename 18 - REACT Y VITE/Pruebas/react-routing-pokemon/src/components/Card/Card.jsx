import styles from "./Card.module.css";

const Card = ({pokemon, handleOnClick}) => {
    
    let id = pokemon.data.id;
    let idModify;
    const image = pokemon.data.sprites.other.home.front_default;
    const name = pokemon.data.name;

    if (id < 10) idModify = `#000${id}`;
    else if (id < 100) idModify = `#00${id}`;
    else if (id < 1000) idModify = `#0${id}`;
    else idModify = `#${id}`;

    return (

        <div onClick={() => handleOnClick(id)} className={styles.card}>
            <h2>{idModify}</h2>
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>

    );

};

export default Card;