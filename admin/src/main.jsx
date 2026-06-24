import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authcontext from './Context/Autncontext.jsx'
import Admincontext from './Context/Admincontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authcontext> 
      <Admincontext>
    <App />
    </Admincontext>
    </Authcontext>
  </BrowserRouter>
)
