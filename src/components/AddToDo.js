import React, {useState, useContext} from 'react'
import {GlobalProvider} from '../App'

function AddToDo({tasks, setTasks, identity, setIdentity}) {
    const globalProvider = useContext(GlobalProvider)

    const [ task,setTask ] = useState({
        title: '',
        description: '',
        label: '',
        id: 3
    })

    

    const handleInput = (e) => {
        setTask({
            ...task, [e.target.name]: e.target.value
        })
    }

    const addTask = () => {
        task.id = globalProvider.identity;
        globalProvider.setIdentity(globalProvider.identity+10)
        globalProvider.dispatch({type:'ADD_TASK', payload: task})
    }


    return (
        <div>
            <label> Task Title </label>
            <input type="text" name="title" value={task.title} onChange={(e)=> {handleInput(e)}}/>
            <label> Task Description </label>
            <input type="text" name="description" value={task.description} onChange={(e)=> {handleInput(e)}}/>
            <label> Task label </label>
            <input type="text" name="label" value={task.label} onChange={(e)=> {handleInput(e)}}/>
            <button className="btn" onClick={()=>addTask()}>Add a Task</button>
        </div>
    )
}

export default AddToDo
