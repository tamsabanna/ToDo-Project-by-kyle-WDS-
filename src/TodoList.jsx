import React from 'react'
import Todos from './Todos'

const TodoList = ({todos, toggleTodo}) => {
  return(
  <>
    <div>{todos.map(todo => {
      return <Todos key={todo.id} todo={todo} toggleTodo={toggleTodo}  />
    })}</div>
  </>
  )
}

export default TodoList


