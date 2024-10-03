const AddToDo = ({setTodos}) => {

    const handleSubmit = (event) => {

        event.preventDefault();

        const tarea = event.target.todo.value;

        setTodos((prevState) => [...prevState, tarea]);

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="todo"/>
                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    )

};

export default AddToDo;