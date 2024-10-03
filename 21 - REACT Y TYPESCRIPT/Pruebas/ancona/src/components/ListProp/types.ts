import React from "react";

export type HasId = {
    id: number;
};

export interface ItemListProp<toDo extends HasId> {
    todos: toDo[];
    renderToDo: (toDo: toDo) => React.ReactNode;
};