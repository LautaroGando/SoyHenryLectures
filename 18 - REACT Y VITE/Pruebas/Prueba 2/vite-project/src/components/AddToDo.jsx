const AddToDo = ({setTodoList}) => {

    const handlerSubmit = (evento) => {
        evento.preventDefault();
        const tarea = evento.target.tarea.value;
        setTodoList(prevTarea => [...prevTarea, tarea])
    }
    
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" id="tarea"/>
                <button>agregar</button>
            </form>
        </div>
    )

};

export default AddToDo;