import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { useState ,useEffect } from 'react'
 import AddTaskForm from './componentes/AddTaskForm/AddTaskForm'
import ToDo from './componentes/ToDo/ToDo'
import UpdateForm from './componentes/UpdateForm/UpdateForm';




const getLocalStorage = () =>{
  let toDo = localStorage.getItem('toDo');
  if(toDo){
    return (toDo = JSON.parse(localStorage.getItem('toDo')))
  }else{
    return [];
  }
}




function App() {

  // State (to do list) state. 
  const [toDo, setToDo] = useState(getLocalStorage());
  // State for newTask.
  const [newTask, setNewTask] = useState('');
  // State for task, maybe you modify something(edit task)
  const [updateData, setUpDateData] = useState('');

  useEffect(()=> {
    localStorage.setItem('toDo',JSON.stringify(toDo));
  },[toDo]);

// Add task 
const addTask = () => {
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = {id: num, title: newTask, status: false};
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
}

// Delete 
const deleteTask = (id) => {
  let newTasks = toDo.filter(task => task.id !== id);
  setToDo(newTasks);
}

// Mark task os done or completed
const markDone = (id) => {
  let newTasks = toDo.map( task => { 
    if(task.id === id){
      return ( {...task , status: !task.status});
    }
    return task;
  })
  setToDo(newTasks);
}


// cancel

const cancelUpdate = () => {
  setUpDateData('')
}


// change task for Update 
const changeTask = (e) => {
  let newEntry = {
    id:updateData.id,
    title:e.target.value,
    status: updateData.status ? true : false
  }
  setUpDateData(newEntry);
}

// update task
const updateTask = () => {
  let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
  let updateObject = [...filterRecords, updateData];
  setToDo(updateObject);
  setUpDateData('')
}





  return (

    <div className='container App'>
      <h2 className='title-tareas'>Tareas Pendientes</h2>

     
      {updateData && updateData ? (
       <UpdateForm
       updateData={updateData}
       changeTask={changeTask}
       updateTask={updateTask}
       cancelUpdate={cancelUpdate}

       /> 
       
      ) : (
        <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        />
      )}
   
      {toDo && toDo.length ? ' ' : 'No Hay Tareas Pendientes'}
        <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpDateData={setUpDateData}
        deleteTask={deleteTask}
        />
    </div>
)
}

export default App;



    
 
