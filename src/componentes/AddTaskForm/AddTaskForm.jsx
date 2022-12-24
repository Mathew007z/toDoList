  




 const AddTaskForm = ({newTask, setNewTask, addTask}) => {



    return (
        <>

        {/* Adherir tarea */}
        <div className='row'>
          <div className='col'>
            <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='form-control from-control-lg'

            />
          </div>
          <div className='col-auto'>
            <button className='btn btn-lg btn-success' onClick={addTask}>Agregar Tarea</button>
          </div>
        </div>
      </>
    )
  }
  


  export default AddTaskForm;