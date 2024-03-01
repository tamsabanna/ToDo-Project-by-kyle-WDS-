import { useState, useRef, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoApp.todos'))
    return storedTodos || []
  })
  const inputRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoApp.todos'))
    if(storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem('todoApp.todos', JSON.stringify(todos))
  },[todos])
  
  function handleAdd(){
    const inputValue = inputRef.current.value
    console.log(inputValue)
    if(inputValue === '') return 
    setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), text:inputValue, complete:false}]

    })
    inputRef.current.value = null

  }

  function toggleTodo(id){
    const newTodo = [...todos]
    const todo = newTodo.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodo)

  }

  function handleRemove(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
        <div className='container'>
            <div className='heading'>To Do App</div>
            <div className='semicontainer'>
                <input type='text' ref={inputRef} placeholder="Your To Do's are Here" className='inputarea' />
                <button onClick={handleAdd} className='addbtn'>➕</button>
                <button onClick={handleRemove} className='removebtn'>➖</button>
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    </>
  )
}

export default App



// className='p-4 outline-none h-4 border border-black w-1/2 '




