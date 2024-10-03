const ToDoList = ({todoList}) => {

    return (
        <div>
            {todoList.map(tarea => {
                return <li key={tarea}>{tarea}</li>  
            })}
        </div>
    )

};

export default ToDoList;