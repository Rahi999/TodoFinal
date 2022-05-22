import React, { useState } from 'react';

const TodoInput = ({ addTodo })=> {
  const [value, setValue] = useState("");

  return (
    <div>
   <input 
   className="input"
   type="text"
   value={value}
   placeholder="New todo Item"
   onChange={(e)=> {
     setValue(e.target.value)
   }}
   />
   
   <button  className="add"
   disabled={!value}
   onClick={()=> {
     
     console.log(value);
     addTodo(value)
     setValue("")
   }}>Add</button>

    </div>
  )
}

export default TodoInput