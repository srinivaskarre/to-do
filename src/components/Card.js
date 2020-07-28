import React,{useContext} from 'react'
import ToDoCard from './ToDoCard'
import {GlobalProvider} from '../App'

function Card() {
    const globalProvider = useContext(GlobalProvider)
    console.log('tasks here>>', globalProvider.tasks)
    return (
        <>
        <ul className="list">
            {globalProvider.tasks.map(task => <div key={task.id} ><ToDoCard task={task}/></div>)}
            
        </ul>
        </>
    )
}

export default Card
