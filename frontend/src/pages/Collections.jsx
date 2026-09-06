
import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Tittle from '../Components/Tittle';
import { shopdatacontext } from '../Context/shopcontext';
import Card from '../Components/card';

function Collections() {


let [showFilters,setShowFilters] = useState(false)
let {products,search,showSearch} = useContext(shopdatacontext)
  console.log(products)

let [  Filterproduct,setFilterproduct] = useState([])
let [category,setcategory] = useState([])
let [subcategory,setSubcategory] = useState([])
let [sorttype,setsorttype] = useState("relavent")


const togglecategory = (e)=>{
  if(category.includes(e.target.value)){
    setcategory(prev => prev.filter(item => item !== e.target.value) )

  }
else{
  setcategory(prev => [...prev,e.target.value])
}


}


const togglesubcategory = (e)=>{
  if(subcategory.includes(e.target.value)){
    setSubcategory(prev => prev.filter(item => item !== e.target.value) )

  }
else{
  setSubcategory(prev => [...prev,e.target.value])
}


}















// const applyfilter = () => {
//   let productcopy = products.slice();

// if(showSearch && search !== ""){
//   productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
// }



//   if (category.length > 0) {
//     productcopy = productcopy.filter(item =>
//       category.includes(item.category.toLowerCase())
//     );
//   }

//   if (subcategory.length > 0) {
//     productcopy = productcopy.filter(item =>
//       subcategory.includes(item.subcategory)
//     );
//   }

//   setFilterproduct(productcopy);
// };


const applyfilter = () => {
  let productcopy = [...products];

  if (search.trim() !== "") {
    productcopy = productcopy.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category.length > 0) {
    productcopy = productcopy.filter(item =>
      category.includes(item.category.toLowerCase())
    );
  }

  if (subcategory.length > 0) {
    productcopy = productcopy.filter(item =>
      subcategory.includes(item.subcategory)
    );
  }

  setFilterproduct(productcopy);
}








const sortproducts = (e)=>{

let fbcopy = Filterproduct.slice()


switch(sorttype){
  case "low-high":
    setFilterproduct(fbcopy.sort((a,b)=>(a.price - b.price)))
    break;
      case "high-low":
    setFilterproduct(fbcopy.sort((a,b)=>(b.price - a.price)))
    break;
    default:
      applyfilter()
      break;
}


}

useEffect(()=>{
   sortproducts()
},[sorttype])


















// useEffect(()=>{
//   setFilterproduct(products)
// },[products])

useEffect(()=>{
  applyfilter()
},[products,category,subcategory,showSearch,search])









  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2] pb-[100px] '>
      <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilters ? "h-auto" : "h-[8vh]" } p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] md:sticky md:top-[70px] md:self-start shrink-0 `}  >

<p className='text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer  ' onClick={()=>setShowFilters(prev=>!prev)}> FILTERS 
{ !showFilters && <FaChevronRight className='text-[18px] md:hidden  ' />} 
{ showFilters && <FaChevronDown className='text-[18px] md:hidden  ' />
}
 </p>
<div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilters ? "" : "hidden" } md:block`}>
<p className='text-[18px] text-[#f8fafa] '>CATEGORIES </p>

<div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col '>
<p className='flex items-center justify-center gap-[10px] text-[16px] font-light  '>
  <input type="checkbox" value={"mens"} className='w-3' onChange={togglecategory} />Mens
   </p>
   <p className='flex items-center justify-center gap-[10px] text-[16px] font-light  '>
  <input type="checkbox" value={"womens"} className='w-3' onChange={togglecategory} />Womens
   </p>
   <p className='flex items-center justify-center gap-[10px] text-[16px] font-light  '>
  <input type="checkbox" value={"kids"} className='w-3' onChange={togglecategory} />Kids
   </p>
</div>
</div>


<div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilters ? "" : "hidden" } md:block`}>
<p className='text-[18px] text-[#f8fafa] '>SUB-CATEGORIES </p>

<div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col '>
<p className='flex items-center justify-center gap-[10px] text-[16px] font-light  '>
  <input type="checkbox" value={"TopWear"} className='w-3' onChange={togglesubcategory} />Topwear
   </p>
   <p className='flex items-center justify-center gap-[10px] text-[16px] font-light  '>
  <input type="checkbox" value={"BottomWear"} className='w-3' onChange={togglesubcategory} />Bottomwear
   </p>
   <p className='flex items-center justify-center gap-[10px] text-[16px] font-light  '>
  <input type="checkbox" value={"WinterCollection"} className='w-3' onChange={togglesubcategory} />Wintercollection
   </p>
</div>
</div>


      </div>
      <div className='flex-1 min-w-0 md:py-[10px]  '>
        <div className='w-full p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]   '>
<Tittle text1={"ALL"} text2={'COLLECTIONS'} />
        
        <select name="" id="" className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-white rounded-lg hover:border-[#46d1f7] border-[2px] ' onChange={(e)=>setsorttype(e.target.value)}>
           <option value="relavent" className='w-[100%] h-[100%]  '>Sort By: Relavent </option>
          <option value="low-high" className='w-[100%] h-[100%]  '>Sort By: Low To High</option>
          <option value="high-low" className='w-[100%] h-[100%]  '>Sort By: High To Low</option>

        
        </select>
        </div>

        <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]  '>
          {
Filterproduct.map((item,index)=>(
  <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1}     />
))
          }

        </div>

      </div>
    </div>
  )
}

export default Collections