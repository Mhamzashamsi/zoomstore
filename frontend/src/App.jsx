// import React from 'react'
// import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Registeration from './pages/registertion'
// import Nav from './Components/Nav'
// import { useContext } from 'react'
//  import { Userdatacontext } from './Context/usercontext'
// import About from './pages/about'
// import Product from './pages/product'
// import Collections from './pages/Collections'
// import Order from './pages/order'
// import Contact from './pages/contact'
// import Productdetails from './pages/Prductdetails'

// const App = () => {
//    let { userdata } = useContext(Userdatacontext)
//   let location = useLocation()
//   return (
//     <>
//  {userdata && <Nav/> }
//     <Routes>
      
//       <Route path='/Login' element={userdata ? (<Navigate to={location.state?.from || "/"}/>) : (<Login />)}/>
//       <Route path='/Register' element={userdata ? (<Navigate to={location.state?.from || "/"}/>) : (<Registeration />)}/>


// <Route path='/' element={userdata ? <Home/> : <Navigate to="/Login" state={{from: location.pathname}} />}/>
// <Route path='/About' element={userdata ? <About/> : <Navigate to="/Login" state={{from: location.pathname}} />}/>

// <Route path='/Collections' element={userdata ? <Collections/> : <Navigate to="/Login" state={{from: location.pathname}} />}/>
// <Route path='/Order' element={userdata ? <Order/> : <Navigate to="/Login" state={{from: location.pathname}} />}/>
// <Route path='/Contact' element={userdata ? <Contact/> : <Navigate to="/Login" state={{from: location.pathname}} />}/>
// <Route path='/Productdetails/:productId' element={userdata ? <Productdetails/> : <Navigate to="/Login" state={{from: location.pathname}} />}/>



      
//     </Routes>
    
    
    
//     </>
//   )
// }

// export default App
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registeration from './pages/registertion'
import Nav from './Components/Nav'
import { useContext } from 'react'
import { Userdatacontext } from './Context/usercontext'
import About from './pages/about'
import Collections from './pages/Collections'
import Order from './pages/Order'
import Contact from './pages/contact'
import Productdetails from './pages/Prductdetails'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
  import { ToastContainer, toast } from 'react-toastify';
import NotFound from './pages/NotFound'
import Ai from './Components/Ai'

const App = () => {
  let { userdata, loading } = useContext(Userdatacontext)
  let location = useLocation()

  if (loading) {
    return <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-l from-[#141414] to-[#0c2025]"><div className="w-[50px] h-[50px] border-4 border-t-[#46d1f7] border-gray-500 rounded-full animate-spin"></div></div>
  }

  return (
    <>
 <ToastContainer />

      {userdata && <Nav />}
        
      <Routes>
        {/* ✅ Login aur Signup routes */}
        
        <Route path='/login' element={userdata ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={userdata ? <Navigate to="/" /> : <Registeration />} /> {/* ✅ Yeh add kiya */}
        <Route path='/register' element={userdata ? <Navigate to="/" /> : <Registeration />} />

        {/* ✅ Protected routes */}
        <Route path='/' element={userdata ? <Home /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
        <Route path='/about' element={userdata ? <About /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
        <Route path='/collections' element={userdata ? <Collections /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
        <Route path='/order' element={userdata ? <Order /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
        <Route path='/contact' element={userdata ? <Contact /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
        <Route path='/productdetails/:productId' element={userdata ? <Productdetails /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
             <Route path='/cart' element={userdata ? <Cart /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
             <Route path='/placeorder' element={userdata ? <Placeorder /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
 <Route path='*' element={<NotFound/>} />

      </Routes>
      <Ai/>
    </>
  )
}

export default App
