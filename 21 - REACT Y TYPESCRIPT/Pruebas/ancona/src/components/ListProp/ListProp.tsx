import React from 'react';
import { ItemListProp, type HasId } from './types';

const ListProp = <toDo extends HasId>({todos, renderToDo}: ItemListProp<toDo>): React.ReactElement => {

    return (

        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{renderToDo(todo)}</li>
                ))}
            </ul>
        </div>

    )

};

export default ListProp;