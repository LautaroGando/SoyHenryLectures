import React from "react";
import { Todos } from "./types";

export const todos: Todos[] = [
    {
        id: 1,
        description: "Todo 1",
        completed: true,
    },
    {
        id: 2,
        description: "Todo 2",
        completed: false,
    },
    {
        id: 3,
        description: "Todo 3",
        completed: false,
    },
];

export const renderTodos = (todos: Todos): React.ReactElement => {

    return (

        <div>
            <span>{todos.id}</span>
            <p>{todos.description}</p>
            {todos.completed && <p>Tarea completa!</p>}
        </div>

    )

};