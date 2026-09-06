import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { shopdatacontext } from '../Context/shopcontext'
import Tittle from './Tittle'
import Card from '../Components/card'







function Relatedproducts({category,subcategory,currentproductId}) {

let {products} = useContext(shopdatacontext)
const [related, setrelated] = useState([])


useEffect(()=>{


if(products.length > 0){

let productscopy = products.slice()
productscopy = productscopy.filter((items) => category === items.category )
productscopy = productscopy.filter((items) => subcategory === items.subcategory )

productscopy = productscopy.filter((items)=> currentproductId !== items._id)
setrelated(productscopy.slice(0,4))
}









},[products,category,subcategory,currentproductId])







    return (
    <div className='my-[130px] md:my-[40px] md:px-[60px]     '>

<div className='ml-[20px] lg:ml-[80px]     '>

<Tittle  text1="Related" text2="Products"  />



</div>

<div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]    '>
{
related.map((items,index) => (

    <Card key={index} id={items._id}  name={items.name} price={items.price} image={items.image1}       />
)
)

}

</div>






    </div>
  )
}

export default Relatedproducts