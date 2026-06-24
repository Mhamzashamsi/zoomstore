// import React from 'react'
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
// import { SiTicktick } from "react-icons/si";


// function Sidebar() {
//   return (
//     <div className=' w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0   '>
//         <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
            
//             <div className='flex items-center justify-center md:justify-start gap-33px border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]  '>
// <IoIosAddCircleOutline className='w-[20px] h-[20px]' />

// <p  className='hidden md:block '>Add items </p>

//  </div> 
 
//             <div className='flex items-center justify-center md:justify-start gap-33px border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]  '>
// <HiOutlineClipboardDocumentList className='w-[20px] h-[20px]' />

// <p  className='hidden md:block '>List items </p>

//  </div> 
 
//             <div className='flex items-center justify-center md:justify-start gap-33px border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]  '>
// <SiTicktick className='w-[20px] h-[20px]' />

// <p  className='hidden md:block '>View orders </p>

//  </div> 
 
// </div>
// </div>
//   )
// }

// export default Sidebar
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";

function Sidebar() {
  return (
    <div className='w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0'>
      <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>

        <NavLink to='/add'
          className={({ isActive }) =>
            `flex items-center justify-center md:justify-start gap-2 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] ${isActive ? 'bg-[#2c7b89]' : ''}`
          }>
          <IoIosAddCircleOutline className='w-[20px] h-[20px]' />
          <p className='hidden md:block'>Add items</p>
        </NavLink>

        <NavLink to='/list'
          className={({ isActive }) =>
            `flex items-center justify-center md:justify-start gap-2 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] ${isActive ? 'bg-[#2c7b89]' : ''}`
          }>
          <HiOutlineClipboardDocumentList className='w-[20px] h-[20px]' />
          <p className='hidden md:block'>List items</p>
        </NavLink>

        <NavLink to='/orders'
          className={({ isActive }) =>
            `flex items-center justify-center md:justify-start gap-2 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] ${isActive ? 'bg-[#2c7b89]' : ''}`
          }>
          <SiTicktick className='w-[20px] h-[20px]' />
          <p className='hidden md:block'>View orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar