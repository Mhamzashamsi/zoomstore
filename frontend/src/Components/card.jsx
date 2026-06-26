import React, { useContext } from 'react'
import { shopdatacontext } from '../Context/shopcontext'
import { useNavigate } from 'react-router-dom'
function Card({ name, price, image, id }) {
 let {currency}= useContext(shopdatacontext)
 let navigate = useNavigate()
    return (
    <div className='w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:backdrop-blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049] ' onClick={()=>navigate(`/Productdetails/${id}`)} >
        <img src={image} alt={name} className='w-[100%] h-[80%] rounded-sm object-cover         ' />
<div className='text-[#c3f6fa] text-[14xpx] py-[10px]    '>{ name } </div>
<div className='text-[#c3f6fa] text-[14px]     '>{ currency } { price } </div>



    </div>
  )
}

export default Card