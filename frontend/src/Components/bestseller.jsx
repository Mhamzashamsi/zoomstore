import React, { useEffect, useState } from 'react'
import Tittle from './Tittle'
import { useContext } from 'react'
import { shopdatacontext } from '../Context/shopcontext'
import Card from './card'

function Bestseller() {
  
  const { products } = useContext(shopdatacontext)
  const [bestseller, setBestseller] = useState([])

  useEffect(() => {
    const filterproduct = products
      .filter((item) => item.bestseller === true || (item.salesCount && item.salesCount > 0))
      .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))   // Sabse zyada sold pehle
      .slice(0, 8);     // ← Yahan se control karo kitne dikhane hain

    setBestseller(filterproduct);
  }, [products])

  return (
    <div>
      <div className='h-[8%] w-[100%] text-center mt-[50px] '>
        <Tittle text1={"BEST"} text2={"SELLER"} />
        <p className='w-[100%] m-auto text-blue-100'>
          Tried, Tested, Loved, Discover Our All-Time Best Sellers
        </p>
      </div>

      <div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
        {bestseller.map((item) => (
          <Card
            key={item._id}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image1}
          />
        ))}
      </div>
    </div>
  )
}

export default Bestseller























// import React, { useEffect, useState } from 'react'
// import Tittle from './Tittle'
// import { useContext } from 'react'
// import { shopdatacontext } from '../Context/shopcontext'
// import Card from './Card'

// function Bestseller() {
//   const { products } = useContext(shopdatacontext)
//   const [bestseller, setBestseller] = useState([])

//   useEffect(() => {
//     // Agar 'bestseller' field nahi hai toh salesCount ya rating se filter karo
//     const filterproduct = products
//       .filter((item) => item.bestseller === true || item.salesCount > 0)
//       .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0)) // sabse zyada sold pehle
//       .slice(0, 4); // 4 bestsellers dikhao

//     setBestseller(filterproduct);
//   }, [products])

//   return (
//     <div>
//       <div className='h-[8%] w-[100%] text-center mt-[50px]'>
//         <Tittle text1={"BEST"} text2={"SELLER"} />
//         <p className='w-[100%] m-auto text-blue-100'>
//           Tried, Tested, Loved, Discover Our All-Time Best Sellers
//         </p>
//       </div>

//       <div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
//         {bestseller.map((item) => (
//           <Card
//             key={item._id}
//             name={item.name}
//             id={item._id}
//             price={item.price}
//             image={item.image1}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Bestseller