import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router'
import './index.css'
import './App.css'
const App = React.lazy(()=> import('./App.jsx'))
const Projects = React.lazy(()=> import('./pages/Projects.jsx'))
const ProjectsList = React.lazy(()=> import('./pages/ProjectList.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''>
      <Route path='' element={<App/>}/>
      <Route path='projects' element={<ProjectsList />}/>
      <Route path='projects/:slug' element={<Projects />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
