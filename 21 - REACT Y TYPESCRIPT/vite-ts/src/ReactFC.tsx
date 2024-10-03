import React from "react";

export const Saludador: React.FC<{ children: React.ReactElement, name: string }> = ({ children, name }): React.ReactElement => {

    return (

        <>
            <h1>¡Hola!, {name}</h1>
            {children}
        </>

    )

};

export default Saludador;