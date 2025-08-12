import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { addTodo } from './store/todoStore';

function App() {

  
  // const todos = useSelector( state => state.todo.todos)

  // useEffect(()=>{
  //   const oldTodos = JSON.parse(localStorage.getItem('todo'))
  //   if (todos && todos.length > 0) dispatch(addTodo(oldTodos))
  // },[])

  //   useEffect(() => {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }, [todos]);

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
