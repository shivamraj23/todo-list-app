import React, { useState } from 'react'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const Editform = ({editTodo,task}) => {
    const[value,setValue]=useState(task.task);

    const handlesubmit=(e)=>{
       e.preventDefault();
       
       editTodo(value,task.id);
    }
    

  return (
    <div className='edit-form'>
        <form className='form-area' onSubmit={handlesubmit}>
            <input type='text' placeholder='update task' value={value} className='textbox' onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit'className='add-button' >
                <DoneOutlinedIcon className="icon-border" style={{backgroundColor:"#00c9a7"}}/>
            </button>
        </form>
      
    </div>
  )

   
  
}

export default Editform
