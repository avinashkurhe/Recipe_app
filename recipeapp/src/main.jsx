import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashbord from './Dashbord'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashbord/>
  </StrictMode>,
)
