import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, 
createRoutesFromElements} from 'react-router-dom'     //? add these to add React Router
import Layout from './Layout.jsx'     //? add Layout.jsx
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'     //? here githubInfoLoader method is loaded here first
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}  //? for advance pre proccessing
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)