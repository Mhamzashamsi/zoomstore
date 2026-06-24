// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { shopdatacontext } from '../Context/shopcontext'
// import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
// import Relatedproducts from '../Components/Relatedproducts';

// function Prductdetails() {
 
 
 
//  let { productId } = useParams()
//  let { products , currency , addtocart }= useContext(shopdatacontext)
//  let [productdata , setproductdata]= useState(false)
 

//  const [image1, setimage1] = useState('')
//  const [image, setimage] = useState('')
//  const [image2, setimage2] = useState('')
//  const [image3, setimage3] = useState('')
//  const [image4, setimage4] = useState('')
//  const [size, setsize] = useState('')



// const fetchproductdata = ()=>{
//   products.map((items)=>{
//     if(items._id === productId){
//       setproductdata(items)
//       console.log(productdata)

// setimage1(items.image1)
// setimage(items.image1)
// setimage2(items.image2)
// setimage3(items.image3)
// setimage4(items.image4)

// return null;




//     }
//   })
// }

// useEffect(()=>{
//   fetchproductdata()
// },[productId,products])



 
 
 
 
 
 
 
 
 
//   return  productdata ? (
 
//  <div>
//  <div className='w-[99vw] h-[130vh] md:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-[20px]    '>
// <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row'> 
// <div className='lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap   '>

// <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md    '>
// <img src={image1} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md   '  onClick={()=>setimage(image1)}/>

// </div>
// <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md    '>
// <img src={image2} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md   ' onClick={()=>setimage(image2)} />

// </div>
// <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md    '>
// <img src={image3} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md   '  onClick={()=>setimage(image3)} />

// </div>
// <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md    '>
// <img src={image4} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md   ' onClick={()=>setimage(image4)} />

// </div>
// </div>


// <div className='lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px] border-[#80808049] rounded-md overflow-hidden   '>


// <img src={image} alt="" className='w-[100%] lg:h-[100%] h-[100%] text-[30px] text-white text-center rounded-md object-fill
//        ' onClick={()=>setimage(image)} />


// </div>
// </div>


// <div className='lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]    '>
// <h1 className='text-[40px] font-semibold text-[aliceblue]   '   > { productdata.name.toUpperCase()  }   </h1>

// <div className='flex items-center gap-1  '>
// <FaStar className='text-[20px] fill-[#FFD700]   ' />
// <FaStar className='text-[20px] fill-[#FFD700]   ' />
// <FaStar className='text-[20px] fill-[#FFD700]   ' />
// <FaStar className='text-[20px] fill-[#FFD700]   ' />
// <FaStarHalfAlt className='text-[20px] fill-[#FFD700]   ' />

// <p className='text-[18px] font-semibold pl-[5px] text-[white]  '> (124)  </p>
// </div>
// <p className=' text-[30px] font-semibold pl-[5px] text-white '> $ {productdata.price}     </p>

// <p className='w-[80% ]md:w-[60%] text-[20px] font-semibold pl-[5px] text-white   '>   
  
//   {productdata.description} and stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable, and designed for effortless style.</p>


// <div className='flex flex-col gap-[10px] my-[10px]   '>

// <p className='text-[25px] font-semibold pl-[5px] text-[white]     '> Select Size   </p>

// <div className='flex gap-2     '>
// {
// productdata.sizes.map((items,index)=>(
//   <button key={index} className={`border py-2 px-4 bg-slate-300 rounded-md   ${items === size ? ' bg-black text-[#2f97f1] text-[20px]  ' : ''   } `} onClick={()=>setsize(items)}       > {items}</button>
// ))



// }
// </div>



// <button className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black    ' onClick={()=>addtocart(productdata._id,size)}>
// Add To Cart
// </button>


// </div>
// <div className='w-[90%] h-[1px] bg-slate-700   '></div>
// <div className='w-[80%] text-[16px] text-white    '>

// <p>100% Orignal Product</p>
// <p>Cash on delivery is avilable on this product</p>
// <p> East return and exchange policy within 7 days              </p>

// </div>
// </div>
// </div>

// <div className='w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden       '>
// <div className='flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]    '>
//   <p className='border px-5 py-3 text-sm text-white     '>Description   </p>
//   <p className='border px-5 py-3 text-sm text-white    '>Reviws (124)</p>
  
  
//    </div>
   
// <div className='w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]         '>

// <p className='w-[95%] h-[90%] flex items-center justify-center    '>
// Upgrade your wardrobe with this stylish slim-fit cotton shirt, avilable now on Zoom store .Crafted from 100% premium cotton, this shirt offers unbeatable comfort and breathability. Its modern slim fit design ensures a sleek silhouette, making it perfect for both casual and formal occasions. Easy to care for and designed for all-day wear, this shirt is a must-have addition to your collection. Shop now and experience the perfect blend of style and comfort!
// </p>










// </div>



// <Relatedproducts category={productdata.category} subcategory={productdata.subcategory} currentproductId={productdata._id}                      />








// </div>



//     </div>
//   ) : <div className='opacity-0  '></div>
// }

// export default Prductdetails
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopdatacontext } from '../Context/shopcontext'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Relatedproducts from '../Components/Relatedproducts';
import { toast } from 'react-toastify'
import Loading from '../Components/Loading'
function ProductDetails() {   // ← Name corrected (Prductdetails → ProductDetails)

  let { productId } = useParams()
  let { products, currency, addtocart } = useContext(shopdatacontext)

  let [productdata, setproductdata] = useState(null)  // false ki jagah null better
const [loading, setloading] = useState(false)
  const [image, setimage] = useState('')
  const [size, setsize] = useState('')

  const fetchproductdata = () => {
    const item = products.find((items) => items._id === productId)  // ← map ki jagah find (best practice)

    if (item) {
      setproductdata(item)
      setimage(item.image1)
    }
    else{
    }
  }

  useEffect(() => {
    fetchproductdata()
  }, [productId, products])

  const handleAddToCart = async () => {

  if (!size) {
    toast.error("Please select a size")
    return
  }

  try {

    setloading(true)

    await addtocart(productdata._id, size)

    toast.success("Product added to cart")

  } catch (error) {

    console.log(error)
    toast.error("Failed to add product")

  } finally {

    setloading(false)

  }
}
  return productdata ? (
    <div>
      <div className='w-[99vw] h-[130vh] md:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-[20px]'>

        {/* Images Section */}
        <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row'>
          
          <div className='lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap'>

            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
              <img src={productdata.image1} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setimage(productdata.image1)} />
            </div>
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
              <img src={productdata.image2} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setimage(productdata.image2)} />
            </div>
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
              <img src={productdata.image3} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setimage(productdata.image3)} />
            </div>
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
              <img src={productdata.image4} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setimage(productdata.image4)} />
            </div>
          </div>

          {/* Main Image */}
          <div className='lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px] border-[#80808049] rounded-md overflow-hidden'>
            <img src={image} alt="" className='w-[100%] h-[100%] object-fill' />
          </div>
        </div>

        {/* Details Section */}
        <div className='lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] gap-[10px]'>

          <h1 className='text-[40px] font-semibold text-[aliceblue]'>
            {productdata.name?.toUpperCase()}
          </h1>

          <div className='flex items-center gap-1'>
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStarHalfAlt className='text-[20px] fill-[#FFD700]' />
            <p className='text-[18px] font-semibold pl-[5px] text-white'>(124)</p>
          </div>

          <p className='text-[30px] font-semibold pl-[5px] text-white'>
            {currency} {productdata.price}
          </p>

          <p className='w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px] text-white'>
            {productdata.description}
          </p>

          <div className='flex flex-col gap-[10px] my-[10px]'>
            <p className='text-[25px] font-semibold pl-[5px] text-white'>Select Size</p>

            <div className='flex gap-2'>
              {productdata.sizes?.map((items, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-slate-300 rounded-md ${items === size ? 'bg-black text-[#2f97f1] text-[20px]' : ''}`}
                  onClick={() => setsize(items)}
                >
                  {items}
                </button>
              ))}
            </div>

            {/* <button
              className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black'
              onClick={() => addtocart(productdata._id, size)}
            >
                {loading ? <Loading /> : 'Add To Cart'}

            </button> */}
            <button
  className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black'
  onClick={handleAddToCart}
  disabled={loading}
>
  {loading ? <Loading /> : 'Add To Cart'}
</button>
          </div>

          <div className='w-[90%] h-[1px] bg-slate-700'></div>

          <div className='w-[80%] text-[16px] text-white'>
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description + Related Products */}
      <div className='w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden'>
        <div className='flex px-[20px] mt-[90px] lg:ml-[80px]'>
          <p className='border px-5 py-3 text-sm text-white'>Description</p>
          <p className='border px-5 py-3 text-sm text-white'>Reviews (124)</p>
        </div>

        <div className='w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]'>
          <p className='w-[95%] h-[90%] flex items-center justify-center'>
            Upgrade your wardrobe with this stylish slim-fit cotton shirt...
          </p>
        </div>

        <Relatedproducts
          category={productdata.category}
          subcategory={productdata.subcategory}
          currentproductId={productdata._id}
        />
      </div>
    </div>
  ) : <div className='opacity-0 min-h-screen'></div>
}

export default ProductDetails