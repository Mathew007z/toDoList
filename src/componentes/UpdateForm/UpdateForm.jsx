




const UpdateForm = ({updateData, changeTask, cancelUpdate,updateTask}) => {



    return (
        <>

        {/* Actualizar tarea */}
            <div className='row'>
             <div className='col'>
               <input
               value={updateData && updateData.title}
               onChange={(e) => changeTask(e)}
               className='form-control form-control-lg'
                 />
           </div>
           <div className='col-auto'>
             <button className='btn btn-lg btn-success mr-20' 
             onClick={updateTask}>Actualizar</button>
             <button className='btn btn-lg btn-warning' 
             onClick={cancelUpdate}>Cancelar</button>
           </div>
         </div>
           </>
    )
  }
  


  export default UpdateForm;