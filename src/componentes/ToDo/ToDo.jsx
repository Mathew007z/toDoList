import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faL, faPen , faTrashCan } from '@fortawesome/free-solid-svg-icons' 



const ToDo = ({toDo, markDone, setUpDateData, deleteTask}) => {



    return (
        <>
        
        {toDo && toDo.map((task, index)=> {
            return(
              <>
                <div className='col taskBg'> 
                  <div className={task.status ? 'done' : ''}>
                      <span className='taskNumber'>{index + 1}</span>
                      <span className='taskText'>{task.title}</span>
                  </div>
                  <div className='iconsWrap'>
                    <span className='span2' title='Completed / Not Completed' 
                    onClick={(e) => markDone(task.id)}>
                      <FontAwesomeIcon icon={faCircleCheck}/>
                    </span>
    
                    {task.status ? null : (
                        <span className='span2' title='Edit'
                        onClick={() => setUpDateData({
                          id:task.id,
                          title: task.title,
                          status: task.status ? true : false
                        })}>
                          <FontAwesomeIcon icon={faPen}/>
                        </span>
                    )}
                    
                    <span className='span2' title='Delete' 
                    onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan}/>
                    </span>
                  </div>
                </div>
                
              </>
    
            )
    
          })
          }
          </>
    )
  }
  


  export default ToDo;