// // import React, { useState } from 'react'
// // import { IoSearchCircleOutline } from "react-icons/io5";
// // import { IoSearchCircle } from "react-icons/io5";
// // import { FaUserCircle } from "react-icons/fa";
// // import { LuShoppingCart } from "react-icons/lu";
// // import { Userdatacontext } from '../Context/usercontext';
// // import { useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { AuthContext } from '../Context/Authcontext';



// // function Nav() {












// //   let { getcurrentuser,userdata} =useContext(Userdatacontext)
// //   let {serverurl} = useContext(AuthContext)
// //   const [showSearch, setShowSearch] = useState(false)
// //     const [showprofile, setShowprofile] = useState(false)
// //     let navigate = useNavigate()



// //     const handlelogout= async()=>{
// // try{
// // const result = await axios.get( serverurl +"/api/auth/logout",{withCredentials:true})
// // console.log(result.data)
// // getcurrentuser()}
// // catch{
// //   console.error("Error occurred while logging out");
// // }
// // }



// //   return (
// //     <div className='flex w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 items-center justify-between px-[30px] shadow-md shadow-black'>

// //       <div className='w-[30%] flex items-center justify-start gap-[10px]'>
// //         <img className='w-[30px]' src="./src/vcart logo.png" alt="Logo" />
// //         <h1 className='text-[25px] text-[black] font-sans'>Zoom Mart</h1>
// //       </div>

// //       <div className='w-[40%]'>
// //         <ul className='flex items-center justify-center gap-[19px] text-[white]'>
// //           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>Home</li>
// //           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>COLLECTION</li>
// //           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>ABOUT</li>
// //           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>CONTACT</li>
// //         </ul>
// //       </div>
// //       <div className='w-[30%] flex items-center justify-end gap-[20px]'>
// // {  !setShowSearch  &&  <IoSearchCircleOutline className='w-[38px] h-[38px] text-[black] cursor-pointer' onClick={() => setShowSearch(!showSearch)} />}
// // {  setShowSearch  &&  <IoSearchCircle className='w-[38px] h-[38px] text-[black] cursor-pointer' onClick={() => setShowSearch(!showSearch)} />}

// // { !userdata && <FaUserCircle className='w-[29px] h-[29px] text-[black] cursor-pointer' />}
// // {userdata && (<div onClick={()=>setShowprofile(prev=>!prev)} className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center text-[13px] font-semibold uppercase leading-none cursor-pointer' onClick={() => setShowprofile(prev => !prev)}>
// //     {userdata?.name.slice(0, 1)}
// //   </div>)}        
        
        
// //         <LuShoppingCart className='w-[30px] h-[30px] text-[black] cursor-pointer' />
// // <p className='absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-[white] rounded-full text-[9px] top-[10px] right-[23px]'>10</p>
// //       </div>
// // {showSearch && (
// //   <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
// //     <input className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]   ' type="text" placeholder='Search Here' />
// //   </div>
// // )}

// // {showprofile && <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaaa9a9] rounded-[10px] z-10'>
  
  
// //   <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]'>
// // {!userdata &&  <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer ' onClick={()=>{navigate(); setShowprofile(false)}}>Login</li>} 
// // { userdata && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer ' onClick={()=>{handlelogout() ;setShowSearch(false)}}>Logout</li>}  
// // <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer '>Orders</li>
// //   <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer '>About</li>
// //  </ul>
  
  
  
  
// //   </div>}  
 
 
 
 
 
 
 
 
 
 
// //   </div>
// //   )
// // }

// // export default Nav
// import React, { useState } from 'react'
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { IoSearchCircle } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import { LuShoppingCart } from "react-icons/lu";
// import { Userdatacontext } from '../Context/usercontext';
// import { useContext } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../Context/Authcontext';
// import { MdContacts } from "react-icons/md";
// import { HiCollection } from "react-icons/hi";
// import { IoHomeSharp } from "react-icons/io5";
// import { shopdatacontext } from '../Context/shopcontext';


// function Nav() {

//   let { getcurrentuser, userdata } = useContext(Userdatacontext)
//   let { serverurl } = useContext(AuthContext)
//   const {showSearch, setShowSearch,search,setsearch,getcartcount} = useContext(shopdatacontext)
//   const [showprofile, setShowprofile] = useState(false)
//   let navigate = useNavigate()

//   const handlelogout = async () => {
//     try {
//       const result = await axios.post(serverurl + "/api/auth/logout", {}, { withCredentials: true })
//       console.log(result.data)
//       getcurrentuser()
//       // setShowprofile(false)
//       navigate("/login")
//     } catch (err) {
//       console.error("Error occurred while logging out", err);
//     }
//   }

//   return (
//     <div className='flex w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 items-center justify-between px-[30px] shadow-md shadow-black'>

//       <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>
//         <img className='w-[30px]' src="./src/vcart logo.png" alt="Logo" />
//         <h1 className='text-[25px] text-[black] font-sans'>Zoom Mart</h1>
//       </div>

//       <div className='w-[50%] lg:w-[40%] hidden md:flex'>
//         <ul className='flex items-center justify-center gap-[19px] text-[white]'>
//           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/")}>HOME</li>
//           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/Collections")}>COLLECTION</li>
//           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/about")}>ABOUT</li>
//           <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/contact")} >CONTACT</li>
//         </ul>
//       </div>

//       <div className='w-[30%] flex items-center justify-end gap-[20px]'>

//         {!showSearch && (
//           <IoSearchCircleOutline
//             className='w-[38px] h-[38px] text-[black] cursor-pointer'
//             onClick={() => {setShowSearch(prev=> !prev);navigate("/collections")}} />
//         )}
//         {showSearch && (
//           <IoSearchCircle
//             className='w-[38px] h-[38px] text-[black] cursor-pointer'
//             onClick={() => setShowSearch(prev => !prev)} onChange={(e)=>{setsearch(e.target.value)}} value={search} />
//         )}

//         {/* ✅ FaUserCircle pe onClick lagaya */}
//         {!userdata && (
//           <FaUserCircle
//             className='w-[29px] h-[29px] text-[black] cursor-pointer'
//             onClick={() => setShowprofile(prev => !prev)}
//           />
//         )}

//         {userdata && (
//           <div
//             onClick={() => setShowprofile(prev => !prev)}
//             className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center text-[13px] font-semibold uppercase leading-none cursor-pointer'>
//             {userdata?.name.slice(0, 1)}
//           </div>
//         )}

//        <div className='relative'>
//   <LuShoppingCart className='w-[30px] h-[30px] text-black cursor-pointer hidden md:block' />

//   <p className='absolute w-[18px] h-[18px] bg-black text-white rounded-full text-[10px] top-[-8px] right-[-8px] pointer-events-none hidden md:block text-center leading-[18px]'>
//     {getcartcount()}
//   </p>
// </div>

//       </div>

//       {showSearch && (
//         <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
//           <input
//             className='lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]'
//             type="text"
//             placeholder='Search Here' onChange={(e)=>{setsearch(e.target.value)}} value={search} />
//         </div>
//       )}

//       {showprofile && (
//         <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaaaaa] rounded-[10px] z-10'>
//           <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]'>

//             {!userdata && (
//               <li
//                 className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'
//                 onClick={() => { navigate('/login'); setShowprofile(false) }}>
//                 Login
//               </li>
//             )}

//             {userdata && (
//               <li
//                 className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'
//                 onClick={() => { handlelogout() }}>
//                 Logout
//               </li>
//             )}

//             <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>Orders</li>
//             <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{()=>navigate("/about");setShowprofile(false)}}>About</li>
//           </ul>
//         </div>
//       )}

// <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden       '>


// <button className='text-[white]  flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/")}> <IoHomeSharp  className='w-[25px] h-[25px] text-[white] md:hidden       ' /> Home</button>
// <button className='text-[white]  flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/collections")}> <HiCollection  className='w-[25px] h-[25px] text-[white] md:hidden       '/>Collection</button>
// <button className='text-[white]  flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/contact")}> <MdContacts className='w-[25px] h-[25px] text-[white] md:hidden       ' />Contact</button>
// <button className='text-[white]  flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/cart")}> <LuShoppingCart  className='w-[25px] h-[25px] text-[white] md:hidden       '/>Cart</button>
// <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]  '>{getcartcount()}</p>






// </div>










//     </div>
//   )
// }

// export default Nav


import React, { useState } from 'react';
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Userdatacontext } from '../Context/usercontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/Authcontext';
import { MdContacts } from "react-icons/md";
import { HiCollection } from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import { shopdatacontext } from '../Context/shopcontext';
import { toast } from 'react-toastify'


function Nav() {
  let { getcurrentuser, userdata,logout } = useContext(Userdatacontext);
  let { serverurl } = useContext(AuthContext);
  const { showSearch, setShowSearch, search, setsearch, getcartcount } = useContext(shopdatacontext);
  
  const [showprofile, setShowprofile] = useState(false);
  let navigate = useNavigate();

const handlelogout = async () => {
    try {
        await axios.post(serverurl + "/api/auth/logout", {}, { withCredentials: true });
        logout();           // ✅ Token + userdata clear
        setShowprofile(false);
        navigate("/login");
        toast.success("Logged out successfully");

    } catch (err) {
        console.error(err);
                toast.success("Logged out error");

    }
}

  return (
    <div className='flex w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 items-center justify-between px-[30px] shadow-md shadow-black'>

      {/* Logo */}
      <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>
        <img className='w-[30px]' src="./src/vcart logo.png" alt="Logo" />
        <h1 className='text-[25px] text-[black] font-sans'>Zoom Store</h1>
      </div>

      {/* Desktop Menu */}
      <div className='w-[50%] lg:w-[40%] hidden md:flex'>
        <ul className='flex items-center justify-center gap-[19px] text-[white]'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' 
              onClick={() => navigate("/")}>HOME</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' 
              onClick={() => navigate("/Collections")}>COLLECTION</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' 
              onClick={() => navigate("/about")}>ABOUT</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' 
              onClick={() => navigate("/contact")}>CONTACT</li>
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className='w-[30%] flex items-center justify-end gap-[20px]'>

        {!showSearch && (
          <IoSearchCircleOutline
            className='w-[38px] h-[38px] text-[black] cursor-pointer'
            onClick={() => { setShowSearch(prev => !prev); navigate("/collections"); }} 
          />
        )}
        {showSearch && (
          <IoSearchCircle
            className='w-[38px] h-[38px] text-[black] cursor-pointer'
            onClick={() => setShowSearch(prev => !prev)} 
          />
        )}

        {!userdata && (
          <FaUserCircle
            className='w-[29px] h-[29px] text-[black] cursor-pointer'
            onClick={() => setShowprofile(prev => !prev)}
          />
        )}

        {userdata && (
          <div
            onClick={() => setShowprofile(prev => !prev)}
            className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center text-[13px] font-semibold uppercase leading-none cursor-pointer'>
            {userdata?.name?.slice(0, 1)}
          </div>
        )}

        <div className='relative'>
          <LuShoppingCart className='w-[30px] h-[30px] text-black cursor-pointer hidden md:block' onClick={()=>navigate("/cart")} />
          <p className='absolute w-[18px] h-[18px] bg-black text-white rounded-full text-[10px] top-[-8px] right-[-8px] pointer-events-none hidden md:block text-center leading-[18px]'>
            {getcartcount()}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center z-20'>
          <input
            className='lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]'
            type="text"
            placeholder='Search Here'
            onChange={(e) => setsearch(e.target.value)}
            value={search}
          />
        </div>
      )}

      {/* PROFILE DROPDOWN - FIXED */}
      {showprofile && (
        <div 
          className='absolute w-[220px] bg-[#000000d7] top-[78px] right-[20px] 
                     border border-[#aaaaaa] rounded-[10px] z-50 shadow-2xl py-2'
          style={{ pointerEvents: 'auto' }}
        >
          <ul className='w-full flex flex-col text-[17px] text-white'>

            {!userdata && (
              <li
                className='w-full hover:bg-[#2f2f2f] px-5 py-3 cursor-pointer'
                onClick={() => { navigate('/login'); setShowprofile(false); }}>
                Login
              </li>
            )}

            {userdata && (
              <li
                className='w-full hover:bg-[#2f2f2f] px-5 py-3 cursor-pointer'
                onClick={handlelogout}>
                Logout
              </li>
            )}

            <li 
              className='w-full hover:bg-[#2f2f2f] px-5 py-3 cursor-pointer'
              onClick={() => { navigate("/order"); setShowprofile(false); }}>
              Orders
            </li>

            <li 
              className='w-full hover:bg-[#2f2f2f] px-5 py-3 cursor-pointer'
              onClick={() => { navigate("/about"); setShowprofile(false); }}>
              About
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden z-30'>

        <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' onClick={() => navigate("/")}>
          <IoHomeSharp className='w-[25px] h-[25px]' /> Home
        </button>
        <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' onClick={() => navigate("/collections")}>
          <HiCollection className='w-[25px] h-[25px]' /> Collection
        </button>
        <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' onClick={() => navigate("/contact")}>
          <MdContacts className='w-[25px] h-[25px]' /> Contact
        </button>
        <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' >
          <LuShoppingCart className='w-[25px] h-[25px]' onClick={()=>navigate("/cart")}  /> Cart
        </button>

        <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]'>
          {getcartcount()}
        </p>
      </div>

    </div>
  );
}

export default Nav;