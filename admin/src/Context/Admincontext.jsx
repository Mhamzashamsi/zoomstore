// import React, { useContext, useState } from 'react'
// import { createContext } from 'react'
// import { Authdatacontext } from './Autncontext'
// import { useEffect } from 'react'
// import axios from 'axios'

// export const Admindatacontext = createContext()

// function Admincontext({children}) {
//     let [admindata, setadmindata] = useState(null)
// let {serverurl}= useContext(Authdatacontext)

// const getadmin=async()=>{
//   try{
//     let result = await axios.get(serverurl+"/api/user/getadmin",{
//       withCredentials:true})
//     setadmindata(result.data)
//     console.log(result.data)
//   }
//   catch(error){
//     setadmindata(null)
//     console.log(error)
//   }
// }
// useEffect(()=>{
//   getadmin()
// },[])




// let value={

//   admindata,setadmindata,getadmin


// }



//   return (
//     <div>
// <Admindatacontext.Provider value={value}>
//     {children}
// </Admindatacontext.Provider>
//     </div>
//   )
// }

// export default Admincontext
import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import { Authdatacontext } from './Autncontext'
import { useEffect } from 'react'
import axios from 'axios'

export const Admindatacontext = createContext()

function Admincontext({children}) {
    let [admindata, setadmindata] = useState(null)
    let [token, setTokenState] = useState(localStorage.getItem("adminToken") || "")
let {serverurl}= useContext(Authdatacontext)

const setToken = (newToken) => {
  setTokenState(newToken)
  if (newToken) {
    localStorage.setItem("adminToken", newToken)
  } else {
    localStorage.removeItem("adminToken")
  }
}

const getadmin=async()=>{
  try{
    const currentToken = localStorage.getItem("adminToken")
    let result = await axios.get(serverurl+"/api/user/getadmin",{
      withCredentials:true,
      headers: currentToken ? { token: currentToken } : {}
    })
    setadmindata(result.data)
    console.log(result.data)
  }
  catch(error){
    setadmindata(null)
    console.log(error)
  }
}
useEffect(()=>{
  getadmin()
},[])




let value={

  admindata,setadmindata,getadmin,token,setToken


}



  return (
    <div>
<Admindatacontext.Provider value={value}>
    {children}
</Admindatacontext.Provider>
    </div>
  )
}

export default Admincontext