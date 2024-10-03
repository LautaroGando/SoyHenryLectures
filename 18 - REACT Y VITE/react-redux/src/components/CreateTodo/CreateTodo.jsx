import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer";
import styles from "./CreateTodo.module.css";

const CreateTodo = () => {

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {

        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(addTodo(todo));

        setTodo({
            title: "",
            description: "",
        });

    };

    return (

        <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={todo.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={todo.description} onChange={handleChange} />
                </div>
                <div>
                    <button className={styles.addButton} type="submit" disabled={(!todo.title && !todo.description) || !todo.title || !todo.description}>Add Todo</button>
                </div>
            </div>
        </form>

    )

}

export default CreateTodo