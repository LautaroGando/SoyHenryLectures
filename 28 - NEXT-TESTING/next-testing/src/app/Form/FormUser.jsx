import { useState } from "react";

const FormUser = ({ onSubmit }) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    return (

        <form onSubmit={(e) => {

            e.preventDefault();

            onSubmit({ nombre, email });

        }}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nombre" />
            <button type="submit">Enviar</button>
        </form>

    )

};

export default FormUser;