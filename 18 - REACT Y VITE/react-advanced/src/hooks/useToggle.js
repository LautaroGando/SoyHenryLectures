import { useState } from "react";

export const useToggle = (initialice = false) => {

    const [value, setValue] = useState(initialice);

    const toggle = () => setValue(!value);

    return [value, toggle];

};