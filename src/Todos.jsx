import React from 'react'

const Todos = ({todo, toggleTodo}) => {


  function handleTodo(){
    toggleTodo(todo.id)
  }


  return (
    <>
    <div>
      <label className='todolist'>
        <input type='checkbox' checked={todo.complete} onChange={handleTodo}/>
        {todo.text}
      </label>
    </div>
    
    </>   
  )
}

export default Todos


