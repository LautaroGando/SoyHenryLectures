import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo';
import ToDoCounter from './components/ToDoCounter';
import ToDoList from './components/ToDoList';
import { todosList } from './helpers/todos';

function App() {

  const [todoList, setTodoList] = useState(todosList)

  return (
    <>
      <AddToDo setTodoList = {setTodoList}/>
      <ToDoCounter todoList = {todoList}/>
      <ToDoList todoList = {todoList}/>
    </>
  )
}

export default App
