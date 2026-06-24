import React, { useEffect, useState } from 'react'
import Tittle from './Tittle'
import { useContext } from 'react'
import { shopdatacontext } from '../Context/shopcontext'
import Card from './Card'


function bestseller() {
  
  let {products} = useContext(shopdatacontext)
  const [bestseller, setbestseller] = useState([])
  
  useEffect(()=>{
let filterproduct = products.filter((items) => items.bestseller)
setbestseller(filterproduct.slice(0,2)) 

},[products])
  
  
  return (
    <div>
      <div className='h-[8%] w-[100%] text-center mt-[50px] '>
<Tittle text1={"BEST"} text2={"SELLER"}   />
<p className='w-[100%] m-auto text-blue-100  '>Tried, Tested, Loved, Discover Our All -Time Best Sellers </p>
      </div>

<div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-50px' >
{
bestseller.map((items,index)=>(
<Card 
key={index}
name={items.name}
id={items._id}
price={items.price}
image={items.image1}
/>
))
}
</div>

    </div>
  )
}

export default bestseller