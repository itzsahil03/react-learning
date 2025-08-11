import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {

  const [color, setColor] = useState("grey");
  return (
    <>
       <div className = "h-screen w-screen" style={{backgroundColor: color }} >
        <div className= "fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
           <div className='flex flex-wrap justify-center bg-gray-200 p-2 ml-80 rounded-xl gap-4'>
            <button className = " bg-red-400 rounded-4xl"onClick={()=> setColor("red")}> RED</button>
            <button className = " bg-blue-400 rounded-4xl"onClick={()=> setColor("blue")}> BLUE</button>
            <button className = " bg-pink-400 rounded-4xl"onClick={()=> setColor("pink")}> PINK</button>
            <button className = " bg-violet-400 rounded-4xl"onClick={()=> setColor("violet")}> VIOLET</button>
            <button className = " bg-green-400 rounded-4xl"onClick={()=> setColor("green")}> GREEN</button>
            <button className = " bg-yellow-400 rounded-4xl"onClick={()=> setColor("yellow")}> YELLOW </button>
            
           </div>
      </div>
      </div>
    </>
  )
}

export default App
