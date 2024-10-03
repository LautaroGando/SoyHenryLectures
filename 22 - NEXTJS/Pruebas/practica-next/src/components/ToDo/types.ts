import React from "react";

export interface HasId {
    id: number;
};

export interface TodoProps<Todo extends HasId> {
    todos: Todo[];
    renderTodos: (todo: Todo) => React.ReactNode;
};