import CreateTodo from './components/CreateTodo/CreateTodo'
import TodoList from './components/TodoList/TodoList'
import styles from "./App.module.css";
import { useSelector } from 'react-redux';

function App() {

  const todos = useSelector((state) => state.todos);

  return (

    <div className={styles.container}>
     <div className={styles.header}>
      <h3>CreateTodo</h3>
      <CreateTodo />
     </div>
     <div>
      <h3>Todo List</h3>
      {todos.length === 0 && <p>No Todos</p>}
      <TodoList todos={todos}/>
     </div>
    </div>

  )

}

export default App