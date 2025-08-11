import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './contexts/UserContext'
import UserContextProvider from './contexts/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1> Please Login with your creds</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
