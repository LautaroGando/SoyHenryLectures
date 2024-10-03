const ToDoList = ({homework}) => {

    return (

        <div>
            <ul>
                {homework.map(homework => {
                    return <li key={homework}>{homework}</li>
                })}
            </ul>
        </div>

    )

}

export default ToDoList;