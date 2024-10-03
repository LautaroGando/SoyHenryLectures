"use client";
import React, { useState } from 'react';

const ClientComponent: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [count, setCount] = useState(0);

    return (

        <>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            {children}
        </>

    )

};

export default ClientComponent;