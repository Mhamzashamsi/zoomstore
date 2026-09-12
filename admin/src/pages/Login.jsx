

// import { IoEyeOutline } from "react-icons/io5";
// import { IoEyeOffSharp } from "react-icons/io5";
// import {  useContext, useState } from 'react';
// import { Authdatacontext } from "../Context/Autncontext";
// import axios from "axios";
// import { Admindatacontext } from "../Context/Admincontext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


// function Login() {


  

  
//    const [show, setshow] = useState(false)
//   let [email, setemail]= useState("")
//   let [password, setpassword]= useState("")
//   let {serverurl}= useContext(Authdatacontext)
//     let {admindata,getadmin}= useContext(Admindatacontext)
//     let navigate = useNavigate()






// const adminlogin =async(e)=>{
//   e.preventDefault()
//   try{
// const result =await axios.post(serverurl+"/api/auth/adminlogin",{email,password},{withCredentials:true})
//   console.log(result.data)
//   toast.success("Admin Login Successfull")
//   getadmin()
//   navigate("/")
//  }
// catch(error){
// console.log(error)
//   toast.error("Admin Login Failed")
// }
// }








//   return (
//  <div className=' w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-[white] flex flex-col items-center justify-start '>
 
 
 
//        <div className='w-[100%] h-[80px] flex items-center justify-start gap-[10px] px-[30px] cursor-pointer' >
//          <img className='w-[40px]' src="./src/assets/vcart logo.png " alt="Logo" />
//        <h1 className='text-[22px] font-sans'>Zoom mart</h1></div>
    
    
    
//        <div className=' w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col'>
//          <span className='text-[25px] font-bold'>Login</span>
//                  <span className='text-[16px]'>Welcome back to zoom mart , Apply To Admin Login   </span>
 
//        </div>
//        <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] rounded-[10px] border-[1px] border-[#96969635] backdrop:backdrop-blur-2xl rounded-lg flex items-center justify-center '>
//  <form onSubmit={adminlogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'  action="">


//  <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'> 
//  <input type="email" required placeholder='Email' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' onChange={(e)=>setemail(e.target.value)} value={email}/>
//  <input type={show ? "text" : "password" } required placeholder='Password' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold  ' onChange={(e)=>setpassword(e.target.value)} value={password}/>
 
//  {!show &&< IoEyeOffSharp className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] bottom-[47%]   ' onClick={()=>setshow(prev=> !prev)} />}
//     { show &&<IoEyeOutline className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] bottom-[47%]  ' onClick={()=>setshow(prev=> !prev)} />}
 
 
//  <button className='w-[100%] h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-white font-bold cursor-pointer'>Login </button>
 
//  </div>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  </form>
//        </div>
//         </div>
//   )
// }

// export default Login
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import {  useContext, useState } from 'react';
import { Authdatacontext } from "../Context/Autncontext";
import axios from "axios";
import { Admindatacontext } from "../Context/Admincontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {


  

  
   const [show, setshow] = useState(false)
  let [email, setemail]= useState("")
  let [password, setpassword]= useState("")
  let {serverurl}= useContext(Authdatacontext)
    let {admindata,getadmin,setToken}= useContext(Admindatacontext)
    let navigate = useNavigate()






const adminlogin =async(e)=>{
  e.preventDefault()
  try{
const result =await axios.post(serverurl+"/api/auth/adminlogin",{email,password},{withCredentials:true})
  console.log(result.data)
  if(result.data?.token){
    setToken(result.data.token)
  }
  toast.success("Admin Login Successfull")
  await getadmin()
  navigate("/")
 }
catch(error){
console.log(error)
  toast.error("Admin Login Failed")
}
}








  return (
 <div className=' w-[100vw] h-[100vh] bg-gradient-to-l from-[#141141] to-[#0c2025] text-[white] flex flex-col items-center justify-start '>
 
 
 
       <div className='w-[100%] h-[80px] flex items-center justify-start gap-[10px] px-[30px] cursor-pointer' >
         <img className='w-[40px]' src="./src/assets/vcart logo.png " alt="Logo" />
       <h1 className='text-[22px] font-sans'>Zoom mart</h1></div>
    
    
    
       <div className=' w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col'>
         <span className='text-[25px] font-bold'>Login</span>
                 <span className='text-[16px]'>Welcome back to zoom mart , Apply To Admin Login   </span>
 
       </div>
       <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] rounded-[10px] border-[1px] border-[#96969635] backdrop:backdrop-blur-2xl rounded-lg flex items-center justify-center '>
 <form onSubmit={adminlogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'  action="">


 <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'> 
 <input type="email" required placeholder='Email' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' onChange={(e)=>setemail(e.target.value)} value={email}/>
 <input type={show ? "text" : "password" } required placeholder='Password' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold  ' onChange={(e)=>setpassword(e.target.value)} value={password}/>
 
 {!show &&< IoEyeOffSharp className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] bottom-[47%]   ' onClick={()=>setshow(prev=> !prev)} />}
    { show &&<IoEyeOutline className='w-[20px] h-[20px]  cursor-pointer absolute right-[5%] bottom-[47%]  ' onClick={()=>setshow(prev=> !prev)} />}
 
 
 <button className='w-[100%] h-[50px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-white font-bold cursor-pointer'>Login </button>
 
 </div>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 </form>
       </div>
        </div>
  )
}

export default Login