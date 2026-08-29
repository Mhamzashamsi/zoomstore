import React, { useContext, useEffect, useState } from 'react'
import { shopdatacontext } from '../Context/shopcontext'
import { useNavigate } from 'react-router-dom';
import Tittle from '../Components/Tittle'
import { RiDeleteBin5Fill } from "react-icons/ri";
import Cartotal from '../Components/Cartotal';

function Cart() {
  
  const { products,currency,cartitems,updatequantity } = useContext(shopdatacontext)
  const [cartdata,setcartdata] = useState([])
  const navigate = useNavigate()
  
  
  useEffect(()=>{
    const tempdata = [];
    for(const items in cartitems){
      for(const item in cartitems[items]){
        if(cartitems[items][item] > 0 ){
          tempdata.push({
            _id:items,
            size:item,
            quantity:cartitems[items][item],
          });
        }
      }
    }
    setcartdata(tempdata)
  },[cartitems])
  
  
  
  
  return (
    <div className='w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]    '>
<div className='h-[8%] w-[100%] text-center mt-[80px]   '>
<Tittle text1={'YOUR'} text2={ 'CART'}/>
</div>
<div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'>

  {
    cartdata.map((item, index) => {
      const productdata = products.find(
        (product) => product._id === item._id
      );

      if (!productdata) return null;

      return (
        <div key={index}  className='w-[100%] h-[10%] border-t border-b  '>

          <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative '>
<img className='w-[100px] h-[100px] rounded-md   ' src={productdata.image1} alt="" />


          <div className='flex items-start justify-center flex-col gap-[10px]    '>
<p className='md:text-[25px] text-[20px] text-[#f3f9fc]   '> {productdata.name}  </p>
<div className='flex items-center gap-[20px]    '>
  <p  className='text-[20px] text-[#aaf4e7]    '>{currency} {productdata.price}   </p>
  <p className='w-[40px] h-[40px] text-[16px] text-white bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9]  '>{item.size}   </p>
</div>
          </div>
<input type="number" min={1} defaultValue={item.quantity} className='md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-[white] text-[18px] font-semibold bg-[#518080b4] absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-[#9ff9f9] rounded-md    ' onChange={(e)=> (e.target.value === '' || e.target.value === '0') ? null : updatequantity (item._id,item.size,Number(e.target.value))} />

<RiDeleteBin5Fill className=' text-[#9ff9f9] w-[25px] h-[25px] absolute top-[50%] md:top-40% md:right-5% right-1  ' onClick={()=>updatequantity(item._id, item.size,0)} />






          </div>

        </div>
      );
    })
  }

</div>
<div className='flex justify-start items-end my-20  '>
<div className='w-full sm:w-450px  '>
<Cartotal/>
<button className='  text-18px  hover:bg-slate-500 cursor-pointer bg-[#51808048] py-10px px-50px rounded-2xl text-white flex items-center justify-center gap-20px  border-1px border-[#80808049] ml-30px mt-20px  ' onClick={()=>{if(cartdata.length > 0){
  navigate("/placeorder")
}
else{
  console.log("Your cart is empty!")
}

}} >
  PROCEED TO CHECKOUT

</button>
</div>
</div>
</div>
);
}
export default Cart
