const Button = ({ house, handleHouse, handleResetHouse }) => {

    return (

        <div>
            <button onClick={() => handleHouse("Gryffindor")}>Gryffindor</button>
            <button onClick={() => handleHouse("Slytherin")}>Slytherin</button>
            <button onClick={() => handleHouse("Hufflepuff")}>Hufflepuff</button>
            <button onClick={() => handleHouse("Ravenclaw")}>Ravenclaw</button>
            <button onClick={handleResetHouse}>Resetear Filtros</button>
            <h1>Casa: {house}</h1>
        </div>

    )

}

export default Button