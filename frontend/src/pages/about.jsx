import React from 'react'
import Tittle from '../Components/Tittle'
// import About from "../assets/Aboutus.jpg"
import Newletter from '../Components/Newletter'

function about() {
  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] '>
<Tittle text1={"ABOUT"} text2={"US"} />
<div className='w-[100%] flex items-center justify-center flex-col lg:flex-row   '> 
{/* <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>  */}

<div className='lg:w-1/2 w-full flex items-center justify-center px-4'>

{/* <img src={About} alt=""   className='lg:w-[65%] w-full max-w-[400px] shadow-md shadow-black rounded-sm' /> */}
</div>

<div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]   '>
<p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]  ' >
  
  Zoomstore born for start, seamless shopping-created to deliver quality products, trending styles, and everyday essentials in one place . with reliable service, fast delivery, and greate value, zoomstore makes your online shopping experience simple, satisfying, and stress-free
   </p>
<p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]  '>

modern shoppers-combining style, convenience and affordable prices, zoomstore is your go-to destination for all your shopping needs. whether you're looking for the latest fashion trends, must-have gadgets, or everyday essentials, zoomstore has you covered with a wide selection of products and a commitment to customer satisfaction.




</p>
<p className='lg:w-[80%] w-[100%] md:text-[16px] text-[13px] text-[white]  '>Our Mission is to provide a seamless shopping experience, offering a wide range of quality products at competitive prices, while prioritizing customer satisfaction and convenience. We strive to be the go-to destination for all your shopping needs, delivering exceptional value and service every step of the way. 
</p>


</div>
</div>

<div className='w-[100%] flex items-center justify-center flex-col gap-[10px]   ' >
<Tittle text1={"WHY"} text2={"CHOOSE US"} />
<div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]   '>

<div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]   '>
  <b className='text-[20px] font-semibold  '> Quality Assurance   </b>
  <p>We gurantee quality through strict checks, reliable sourcing, and a comitment to consumer satisfaction always   </p>
</div>


<div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]   '>
  <b className='text-[20px] font-semibold  '>Convenience   </b>
  <p>shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place    </p>
</div>


<div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]   '>
  <b className='text-[20px] font-semibold  '> Exceptional customer services   </b>
  <p> our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time    </p>
</div>




</div>
</div>



<Newletter />




    </div>
  )
}

export default about