import { useState } from 'react';
import AddToDo from './AddToDo';
import './App.css'
import ToDoCounter from './ToDoCounter';
import ToDoList from './ToDoList';

function App() {

  const [todos, setTodos] = useState(["Tarea 1", "Tarea 2", "Tarea 3"]);

  return (
    <div>
      <AddToDo setTodos={setTodos}/>
      <br />
      <ToDoCounter todos={todos}/>
      <br />
      <ToDoList todos={todos}/>
    </div>
  )
}

export default App