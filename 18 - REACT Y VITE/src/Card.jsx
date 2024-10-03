import styles from "./Card.module.css";

const Card = ({character: {name, house}}) => {

    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            <h3>{house}</h3>
        </div>
    )

}

export default Card