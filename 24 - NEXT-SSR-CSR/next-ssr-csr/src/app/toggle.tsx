import React from 'react';
import useToggle from './use-toggle';
import FancyButton from './fancy-button';

const Toggle = ({children}: {children: React.ReactNode}) => {

    const [toggle, setToggle] = useToggle(false);

    return <FancyButton onClick={setToggle as () => void}>{children}</FancyButton>

};

export default Toggle;