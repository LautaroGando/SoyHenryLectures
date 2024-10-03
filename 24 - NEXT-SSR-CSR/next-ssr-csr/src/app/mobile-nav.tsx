import React from 'react';
import Toggle from './toggle';

const MobileNav: React.FC = ():React.ReactElement => {

    const children = <button>Menu</button>

    return Toggle({ children })

};

export default MobileNav;