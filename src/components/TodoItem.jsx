import React from 'react';

const TodoItem = ({ value,deleteTodo, setValue })=> {
  return (
    
    <div className="border1">
    <input type="checkbox"/>
    {value}
    
    <button onClick={()=> deleteTodo(value)} >delete</button>
    </div>
  ) 
}

export default TodoItem