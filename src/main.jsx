import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Appliances from './pages/Appliances.jsx'
import PhonesTablet from './pages/PhonesTablet.jsx'
import HealthBeauty from './pages/HealthBeauty.jsx'

const router = createBrowserRouter([
  
  { path: '/', element: <App/> },
  { path: '/appliances/', element: <Appliances/> },
  { path: '/phones-tablets/', element: <PhonesTablet/> },
  { path: '/health-beauty/', element: <HealthBeauty/> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
