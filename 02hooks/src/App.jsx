import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  function addCounter(){
    if( count < 20) setCount(count + 1)
  }

  function removeCounter(){
    if( count > 0) setCount(count - 1)
  }
  return (
    <>
      <div className="id">
        <h1 className="counter"> Counter {count} </h1>
        <button className="add"
        onClick = {addCounter}>Add counter {count}</button>
        <br />
        <button 
          className="remove"
          onClick = {removeCounter} >Remove Counter {count} </button>

      </div>
    </>
  )
}

export default App
