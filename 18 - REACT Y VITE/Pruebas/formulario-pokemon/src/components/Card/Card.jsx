import styles from "./Card.module.css";

const Card = ({pokemon}) => {

    console.log(pokemon);

    const image = pokemon.data.sprites.other.showdown
    .front_default;

    return (

        <div className={styles.card}>
            <img src={image} alt="" />
        </div>
    )

}

export default Card