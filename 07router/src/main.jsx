import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home , About, Contact, Github, User} from './components/Index'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { userLoader } from './components/Github'

const router = createBrowserRouter( 
  createRoutesFromElements([
    <Route path= "/" element={<Layout />}>
      <Route path= "" element={<Home />}/>
      <Route path= "about" element={<About />}/>
      <Route path= "contact" element={<Contact />}/>
      <Route 
      path= "github" 
      element={<Github />}
      loader={userLoader}
      />
      <Route path= "user/:id" element={<User />}/>
    </Route>
  ])
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)

