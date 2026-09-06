// import React, { useContext, useEffect, useState } from 'react'
// import Tittle from './Tittle'
// import { shopdatacontext } from '../Context/shopcontext.jsx'

// import Card from './card.jsx'

// function Latestcollection() {
  
//    const context = useContext(shopdatacontext)
//   console.log("CONTEXT:", context)

//   const { products = [] } = context || {}
// let {products} = useContext(shopdatacontext)


// const [Latestproduct, setLatestproduct] = useState([])




// useEffect(() => {
//   if (Array.isArray(products)) {
//     setLatestproduct(products.slice(0, 1))
//   } else {
//     setLatestproduct([])
//   }
// }, [products])




//   return (
   
//    <div>
//       <div className='h-[8%] w-[100%] text-center md:mt-[50px]  '>
//         <Tittle text1="Latest" text2="Collection" />
// <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100  '>
//     Step Into Style - New Collection Dropping This Season
// </p>

//     </div>
//     <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]  '>
// {Latestproduct.map((items, index) => {
//     return (
//       <Card
//         key={index}
//         name={items.name}
//         image={items.image1}
//         id={items._id}
//         price={items.price}
//       />
//     )
//   })
// }


//     </div>
//    </div>

//   )
// }

// export default Latestcollection
import React, { useContext, useEffect, useState } from 'react'
import Tittle from './Tittle'
import { shopdatacontext } from '../Context/shopcontext'
import Card from './card'

function latestcollection() {

  const context = useContext(shopdatacontext)

  

  const { products = [] } = context || {}

  const [latestproduct, setlatestproduct] = useState([])

  // useEffect(() => {
  //   if (Array.isArray(products)) {
  //     setlatestproduct(products.slice(0, 2))
  //   }
  // }, [products])

  useEffect(() => {
  if (Array.isArray(products)) {
    // Newest products pehle aaye isliye sort karo (agar backend se nahi aa raha)
    const sorted = [...products].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    setlatestproduct(sorted.slice(0, 4)); // 4 latest
  }
}, [products])
  return (
    <div>
      <div className='h-[8%] w-[100%] text-center md:mt-[50px]'>
        <Tittle text1="Latest" text2="Collection" />
      </div>

      <div className='w-[100%] mt-[30px] flex flex-wrap gap-[50px] justify-center'>
        {
          latestproduct.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image1}
              id={item._id}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default latestcollection