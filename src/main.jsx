import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router'
import Projects from './pages/Projects.jsx'
import ProjectsList from './pages/ProjectList.jsx'

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
