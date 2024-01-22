
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [input,setInput] = useState("")
  let [todos,setTodos] = useState([])

  let handleTodo = ()=>{
      if(input !==""){
        let todo = input
        setInput("")
        setTodos(prev=>[todo,...prev])
      }
  }

  let handleDelete = (index)=>{
      let updatedTodos = todos.filter((todo,i)=> i!==index )
      setTodos(updatedTodos)
      console.log(updatedTodos);
  }

  return (
    <div className="main-container">
       {/* Do not remove the main div */} 
      <h3>To-Do-List</h3>
      <div>
      <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleTodo}>Add Todo</button> </div>
      {todos&& todos.length>0 && todos.map((todo,index)=>{
        return <div className="Todos" key={index}><p>{todo}</p> <button onClick={()=>handleDelete(index)}>delete</button></div>
      })}
    </div>
  )
}

export default App
