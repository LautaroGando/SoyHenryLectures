import { useEffect, useState } from "react";

const Preview = ({usuario}) => {

    const [datosUsuario, setDatosUsuario] = useState(null);

    useEffect(() => {

        const fetchDatosUsuario = async () => {

            const respuesta = await fetch(`https://api.ejemplo.com/usuarios/${usuario.email}`);

            const datos = await respuesta.json();

            setDatosUsuario(datos);

        };

        if (usuario.email) {

            fetchDatosUsuario();

        };

    }, [usuario]);

    if (!datosUsuario) {

        return <div>Cargando datos del usuario...</div>

    };

    return (

        <div>
            <h1>{datosUsuario.nombreCompleto}</h1>
            <p>Email: {usuario.email}</p>
            {/* Otros datos del usuario */}
        </div>

    )

};

export default Preview;