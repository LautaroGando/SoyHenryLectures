import React from 'react'
import ToDo from '../ToDo/ToDo';
import { renderTodos, todos } from './utils';

const ToDoList = () => {

    return (

        <div>
            <ToDo todos={todos} renderTodos={renderTodos}/>
        </div>

    )

};

export default ToDoList;