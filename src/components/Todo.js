import React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className='todo-list'>
       
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
       
        
        <div className='edit-delete-icons'>
            <EditOutlinedIcon className="icon-border" style={{cursor:'pointer', backgroundColor:'#00c9a7'}} onClick={() => editTodo(task.id)}/>
            <DeleteOutlineOutlinedIcon className="icon-border"  style={{cursor:'pointer',backgroundColor:''}}  onClick={() => deleteTodo(task.id)}/>

        </div>

      
    </div>
  )
}

export default Todo
