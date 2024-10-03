import React from "react";
import { ITodos } from "./types";

export const todosList: ITodos[] = [
    {
        id: 1,
        description: "Tarea 1",
        completed: false,
    },
    {
        id: 2,
        description: "Tarea 2",
        completed: false,
    },
    {
        id: 3,
        description: "Tarea 3",
        completed: false,
    },
];

export const renderToDo = ({id, description, completed}: ITodos): React.ReactElement => {

    return (

        <div>
            <span>{id}</span>
            <p>{description}</p>
            {completed ? <p>Completada</p> : <p>Incompleta</p>}
        </div>

    )

};