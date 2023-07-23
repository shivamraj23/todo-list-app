import React from 'react'
import { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Todoform = ({addTodo}) => {
    const[value,setValue]=useState('');

    const handlesubmit=(e)=>{
       e.preventDefault();
       if (value) {
        addTodo(value);
        setValue('');
      }
    }
    

  return (
    <div className='edit-form'>
        <form className='form-area' onSubmit={handlesubmit}>
            <input type='text' placeholder='task name' value={value} className='textbox' onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit'className='add-button' >
                <AddOutlinedIcon className="icon-border"/>
            </button>
        </form>
      
    </div>
  )
}

export default Todoform
