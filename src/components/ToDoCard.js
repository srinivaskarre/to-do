import React, { useContext } from 'react'
import {GlobalProvider} from '../App'

function ToDoCard({task}) {

    const globalProvider = useContext(GlobalProvider)

    const deleteToDoCard = (id) => {
            console.log(id)
            globalProvider.dispatch({type:'REMOVE_TASK', payload: id})
    }
    
    return (
        <li className="minus">
            {task.title}
            <button onClick={() => deleteToDoCard(task.id)} className="delete-btn">X</button>
        </li>
    )
}

export default ToDoCard
