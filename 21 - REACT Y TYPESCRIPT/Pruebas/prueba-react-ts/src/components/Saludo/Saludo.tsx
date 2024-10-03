import React from 'react'

const Saludo: React.FC<{ name: string }> = ({ name }): React.ReactElement => {

    return (

        <>
            <h1>Bienvenido, {name}!</h1>
        </>

    )

};

export default Saludo;