import { ITask } from "./types";

export const tasks: ITask[] = [
    {
        id: 1,
        title: "Tarea 1",
        description: "Descripción de tarea 1.",
    },
    {
        id: 2,
        title: "Tarea 2",
        description: "Descripción de tarea 2.",
    },
    {
        id: 3,
        title: "Tarea 3",
        description: "Descripción de tarea 3.",
    },
];

export const renderTasks = (task: ITask) => {

    return (

        <div>
            <p>{task.id}</p>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>

    )

};