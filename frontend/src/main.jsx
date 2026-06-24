import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authcontext from './Context/Authcontext.jsx'
import Usercontext from './Context/usercontext.jsx'
import Shopdatacontext from './Context/shopcontext.jsx'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Authcontext>
    <Shopdatacontext>
      <Usercontext>
        <App />
      </Usercontext>
    </Shopdatacontext>
  </Authcontext>
</BrowserRouter>

)
