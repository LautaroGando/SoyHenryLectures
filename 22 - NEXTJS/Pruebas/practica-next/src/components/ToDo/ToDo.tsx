import React from 'react'
import { HasId, TodoProps } from './types';

const ToDo = <Todo extends HasId>({todos, renderTodos}: TodoProps<Todo>) => {

    return (

        <div>
            <ul>
                {
                    todos.map(todo => {
                        return <li key={todo.id}>{renderTodos(todo)}</li>
                    })
                }
            </ul>
        </div>

    )

};

export default ToDo;