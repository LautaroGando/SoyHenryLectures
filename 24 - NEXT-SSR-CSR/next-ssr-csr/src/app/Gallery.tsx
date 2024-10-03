"use client";
import React, { useState } from "react";
import Slider from "./components/slider";

const Gallery: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div>
            <button onClick={() => setIsOpen(true)}>View pictures</button>
            {isOpen && <Slider />}
        </div>

    )

};

export default Gallery;