import { useState } from 'react'
import './App.css'
import homeworks from "./helpers/ToDoList";
import ToDoList from './components/ToDoList';
import CountToDo from './components/CountToDo';
import AddToDo from './components/AddToDo';

function App() {

  const [homework, setHomework] = useState(homeworks);

  return (

    <>
      <ToDoList homework={homework}/>
      <CountToDo homework={homework}/>
      <AddToDo setHomework={setHomework}/>
    </>

  )

}

export default App;