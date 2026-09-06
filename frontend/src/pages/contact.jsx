// import React from 'react'
// import Title from '../Components/Tittle'
// import contactus from '../assets/contact.jpg'
// import Newletter from '../Components/Newletter'
// function contact() {
//   return (
//     <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]    '  >
// <Title text1={"CONTACT"} text2={"US"}       />
// <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row  '>
//   <div className='lg:w-[50%] w-[100%] flex items-center justify-center     '>
//     <img src={contactus} alt="" className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm    ' />
//   </div>
//   <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]    ' >  
//     <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]      '>
// Our Store</p>
//     <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]    '>
//       <p>12345 Random Station</p>
//       <p>New York, NY 10001</p>
//     </p>
//     <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]    '>
//       <p>Phone: (123) 456-7890</p>
//       <p>Email: info@ourstore.com</p>
//     </p>

//  <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]    '>
//       <p >Careers at Zoom store</p>
//             <p className='      '> Learn more about our teams and job openings   </p>

//     </p>

// <button className='px-[30px] py-[20px] flex items-center justify-center text-[white] bg-transparent border active:bg-slate-600 rounded-md   '>
//   Explore Jobs
// </button>




    
//       </div>
// </div>












// <Newletter />


//     </div>
//   )
// }

// export default contactx

import React from 'react'
import Title from '../Components/Tittle'
import contactus from '../assets/contact.jpg'
import Newletter from '../Components/Newletter'

function contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>

      <Title text1={"CONTACT"} text2={"US"} />

      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>

        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img
            src={contactus}
            alt=""
            className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm'
          />
        </div>

        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>

          <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]'>
            Our Store
          </p>

          {/* FIXED */}
          <div className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>12345 Random Station</p>
            <p>New York, NY 10001</p>
          </div>

          {/* FIXED */}
          <div className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@ourstore.com</p>
          </div>

          {/* FIXED */}
          <div className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>Careers at Zoom store</p>
            <p>Learn more about our teams and job openings</p>
          </div>

          <button className='px-[30px] py-[20px] flex items-center justify-center text-[white] bg-transparent border active:bg-slate-600 rounded-md'>
            Explore Jobs
          </button>

        </div>

      </div>

      <Newletter />

    </div>
  )
}

export default contact