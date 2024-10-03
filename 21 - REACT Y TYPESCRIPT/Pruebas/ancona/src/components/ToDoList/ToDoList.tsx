import React from 'react'
import ListProp from '../ListProp/ListProp';
import { todosList, renderToDo } from './utils';

const ToDoList: React.FC = (): React.ReactElement => {

    return (

        <div>
            <form>
                <input type="text" name="task" id="task" placeholder='Agregar tarea...'/>
            </form>
            <div>
                <ListProp todos={todosList} renderToDo={renderToDo} />
            </div>
        </div>

    )

};

export default ToDoList;