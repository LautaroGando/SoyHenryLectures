import React from 'react';

const FancyButton = ({children: onClick}: {children: React.ReactNode, onClick: () => void}) => {

    return (

        <div>
            <button onClick={onClick}>{children}</button>
        </div>

    )

};

export default FancyButton;