import React, { useContext } from 'react'
import Tittle from './Tittle'
import { shopdatacontext } from '../Context/shopcontext'

function Cartotal() {

const {currency, delivery_charges, getcartamount} = useContext(shopdatacontext)


    return (
    <div className='w-full lg:ml-30px  '>
<div className='text-xl py-10px   '>
<Tittle text1={"CART"} text2={'TOTALS'}  />
</div>

<div className='flex flex-col gap-2 mt-2 text-sm p-30px border-2px border-[#4d8890]   '>
<div className='flex justify-between text-white text-18px  p-10px   '>
<p>Subtotal</p>
<p>{ currency }  {getcartamount()}.00   </p>
</div>

<hr />
<div className='flex justify-between text-white text-18px p-10px   '>
<p>Shipping Fee</p>
<p>{currency} {delivery_charges}</p>
</div>
<hr />
<div className='flex justify-between text-white text-18px p-10px  '>
<b>Total</b>
<b> {currency} {getcartamount () === 0 ? 0 : getcartamount() + delivery_charges}  </b>
</div>


</div>






    </div>
  )
}

export default Cartotal