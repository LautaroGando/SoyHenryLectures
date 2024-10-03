import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({todos}) => {

    return (

        <div className={styles.container}>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
            ))}
        </div>

    )

}

export default TodoList