import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authdatacontext } from '../Context/Autncontext';
import { Admindatacontext } from '../Context/Admincontext';
import axios from 'axios';
import { toast } from "react-toastify";

function Nav() {
  
  let navigate = useNavigate()
let {serverurl}= useContext(Authdatacontext);
let {getadmin}= useContext(Admindatacontext)
 


const logout =async()=>{
  try{
    const result =await axios.post(serverurl+"/api/auth/logout",{withCredentials:true})
    console.log(result.data)
  toast.success("Admin Logout Successfull")
    getadmin()
    navigate("/login")
   }
   catch(error){
    console.log(error)
   }
  }






  
  return (
    <div className=' w-[100vw] h-[70px]    bg-[white] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black                '>
<div className='w-[30%] flex items-centerjustify-start gap-[10px] cursor-pointer'  onClick={()=>navigate("/login")}>
  <img className='w-[30px]' src="./src/assets/vcart logo.png "  alt="" />
<h1 className='text-[25px] text-[black] font-sans'> Zoom Mart</h1>
</div>

<button className=' text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white ' onClick={logout}>Logout</button>



    </div>
  )}



export default Nav