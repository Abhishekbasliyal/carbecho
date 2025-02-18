import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home, Profile, Viewcar, Carlisting } from "./pages/index.js";
import './index.css'
import Root from "./routes/Root.jsx";
// import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='profile' element={<Profile />} />
      <Route path='viewcar' element={<Viewcar />} />
      <Route path='carlisting' element={<Carlisting />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
