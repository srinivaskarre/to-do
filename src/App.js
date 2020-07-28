import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import AddToDo from './components/AddToDo';

export const GlobalProvider = React.createContext()

const initialState = [{
  id: 1,
  title: 'Clean Kitchen',
  description: 'Please clean kitchen',
  label: 5,
  progress: 0,
  completed: 1
},
{
  id: 2,
  title: 'Clean Home',
  description: 'Please clean Home',
  label: 5,
  progress: 0,
  completed: 1
}]

const reducer = (state,action) => {
  console.log('in dispatch', action)
switch(action.type){
  case 'ADD_TASK':
    return [...state, action.payload]
  case 'REMOVE_TASK':
    {
      state = state.filter(task => task.id!= action.payload)
      return state
    }
  default:
    return state
}
}

function App() {

const [tasks, dispatch] = useReducer(reducer, initialState)
const [identity, setIdentity] = useState(1001)

  return (
    <GlobalProvider.Provider value= {{tasks: tasks, dispatch: dispatch, identity: identity, setIdentity: setIdentity}}>
    <h1>To-Do App</h1>
    <div className="container">
    <Card />
    <AddToDo />
   </div>
   </GlobalProvider.Provider>
  );
}

export default App;
