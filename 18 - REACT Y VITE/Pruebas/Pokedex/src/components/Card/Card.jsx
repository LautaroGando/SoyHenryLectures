import styles from "./Card.module.css"

const Card = ({ character, handleOnClick }) => {

    return (

        <div className={styles.card}>
            {/* Creamos la card */}
            <h2>{character.name}</h2>
            <button onClick={() => handleOnClick(character.id)}>Ver Detalle</button>
        </div>

    )

}

export default Card