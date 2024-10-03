import React from "react";

// types
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ title, description }) => {

    return (

        <div>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>

    )

};

export default Card;