import { useState } from "react";

const Contador = ({inicio, paso}) => {

    const [conteo, setConteo] = useState(inicio);
    const [habilitado, setHabilitado] = useState(true);

    const incrementar = () => {

        if (habilitado) {

            setConteo(conteo + paso);

        };

    };

    return (

        <div>
            <span>Conteo: {conteo}</span>
            <button onClick={incrementar} disabled={!habilitado}>Incrementar</button>
            <button onClick={() => setHabilitado(!habilitado)}>{habilitado ? 'Deshabilitado' : 'Habilitado'}</button>
        </div>

    )

};

export default Contador;