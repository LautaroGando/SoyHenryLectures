const ComponentA = ({counter, onIncrement}) => {

    return (
        <div>
            <p>Componente A - Counter: {counter}</p>
            <button onClick={onIncrement}>Incrementar counter A</button>
        </div>
    )

};

export default ComponentA;