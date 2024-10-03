const AddToDo = ({setHomework}) => {

    const handleAddHw = (e) => {

        e.preventDefault();

        const newHomework = e.target.hw.value;

        setHomework(prevHomework => [...prevHomework, newHomework]);

    };

    return (

        <div>
            <form onSubmit={handleAddHw}>
                <input type="text" id="hw" />
                <button>AGREGAR TAREA</button>
            </form>
        </div>

    )

}

export default AddToDo;