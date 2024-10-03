const ToDoList = ({todos}) => {

    return (
        <div>
            <ul>
                {todos.map((tarea) => {
                    return <li key={tarea}>{tarea}</li>
                })}
            </ul>
        </div>
    )

};

export default ToDoList;