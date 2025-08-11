import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className="">
      <h1 className="text-3xl font-bold underline bg-blue-400 p-4 rounded-xl ">
        Hello this is tailwind trail
      </h1>
      </div>
      <div className= "flex flex-wrap justify-center gap-4 mt-10">
        <Card code="Not Coming"/> 
        <Card code=" Coming"/>
      </div>
      
    </>
  )
}

export default App
