import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Add from './pages/Add'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { Admindatacontext } from './Context/Admincontext'
import { useContext } from 'react'
  import { ToastContainer, toast } from 'react-toastify';


function App() {
  let admindata = useContext(Admindatacontext)
  return (
    <>
 <ToastContainer />
{ !admindata ? <Login /> : <>

<Routes>
<Route path='/' element={<Home />} />
<Route path='/list' element={<List />} />
<Route path='/add' element={<Add />} />
<Route path='/orders' element={<Orders />} />
<Route path='/login' element={<Login />} />

</Routes>
    </>

}




    </>
  )
}

export default App