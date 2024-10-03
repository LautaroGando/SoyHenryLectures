import { useState } from 'react';

const useToggle = (initialState: boolean) => {

    const [toggle, setToggle] = useState(initialState);

    return [toggle, () => setToggle(!toggle)];

};

export default useToggle;