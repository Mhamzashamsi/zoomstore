// // import React from 'react'
// // import Nav from '../components/Nav'
// // import Sidebar from '../components/Sidebar'
// // import { useState } from 'react'
// // import { useContext } from 'react'
// // import { Authdatacontext } from '../Context/Autncontext'
// // import { useEffect } from 'react'
// // import axios from 'axios'

// // function Home() {

// // const [totalproducts,settotalproducts] = useState(0)
// // const [totalorders,settotalorders] = useState(0)

// // const {serverurl} = useContext(Authdatacontext)
 
// // const fetchcount = async () =>{
// //   try{
// // const products = await axios.post(`${serverurl} /api/product/list`,{},{withcredentials:true})
// // settotalproducts(products.data.length)
// // const orders = await axios.post(`${serverurl}/api/order/list`,{},{withcredentials:true})
// // settotalorders(orders.data.length)

// // }
// //   catch(error){

// //   }
// // }
// // useEffect(()=>{
// // fetchcount()
// // },[])





// // return (
// //     <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] relative '>
// //     <Nav />
// //     <Sidebar/>
// //     <div className=' w-[70vw] h-[100vh] absolute left-[25%] flex items-start justify-start flex-col gap-[40px] py-[100px]  '>
// //       <h1 className='text-[35px] text-[#afe2f2]  '> Zoom Store Admin Panel </h1>
// //    <div className='flex items-center justify-start gap-[50px] flex-col md:flex-row    '>
// //     <div className='text-[#dcfafd] w-[400px] max-w-[90%] h-[200px] bg-[#0000002e] flex items-centerjustify-center flex-col gap-[20px] rounded-lg shadow-sm  shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px] border-[#969595] '> Total No. of Products :
// // <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]  '>
// // {totalproducts}
// // </span>
// //     </div>
// //       <div className='text-[#dcfafd] w-[400px] max-w-[90%] h-[200px] bg-[#0000002e] flex items-centerjustify-center flex-col gap-[20px] rounded-lg shadow-sm  shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px] border-[#969595] '> Total No. of Products :
// // <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]  '>
// // {totalorders}
// // </span>
// //     </div>
// //    </div>
   
   
   
   
   
   
   
   
// //     </div>
// //     </div>
// //   )
// // }

// // export default Home
// import React from 'react'
// import Nav from '../components/Nav'
// import Sidebar from '../components/Sidebar'
// import { useState, useContext, useEffect } from 'react'
// import { Authdatacontext } from '../Context/Autncontext'
// import axios from 'axios'

// function Home() {

//   const [totalproducts, settotalproducts] = useState(0)
//   const [totalorders, settotalorders] = useState(0)
//   const { serverurl } = useContext(Authdatacontext)

//   const fetchcount = async () => {
//     try {
//       // ✅ Fix 1: Removed extra space in URL
//       const products = await axios.post(`${serverurl}/api/product/list`, {}, { withCredentials: true }) // ✅ Fix 2: withCredentials capital C
//       settotalproducts(products.data.length)

//       const orders = await axios.post(`${serverurl}/api/order/list`, {}, { withCredentials: true })
//       settotalorders(orders.data.length)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     fetchcount()
//   }, [])

//   return (
//     <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white relative'>
//       <Nav />
//       <Sidebar />

//       {/* ✅ Fix 5: Responsive left offset and padding fixed */}
//       <div className='w-full md:w-[75vw] h-full absolute md:left-[25%] left-0 flex items-start justify-start flex-col gap-[40px] py-[100px] px-6 md:px-10'>
//         <h1 className='text-[35px] text-[#afe2f2]'>Zoom Store Admin Panel</h1>

//         <div className='flex items-center justify-start gap-[30px] flex-col md:flex-row w-full'>

//           <div className='text-[#dcfafd] w-full md:w-[350px] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop-blur-lg md:text-[25px] text-[20px] border border-[#969595] px-4'>
//             Total No. of Products:
//             <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border border-[#969595] min-w-[80px]'>
//               {totalproducts}
//             </span>
//           </div>

//           {/* ✅ Fix 3: Changed label to "Orders" */}
//           <div className='text-[#dcfafd] w-full md:w-[350px] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop-blur-lg md:text-[25px] text-[20px] border border-[#969595] px-4'>
//             {/* ✅ Fix 4: Fixed items-centerjustify-center typo above */}
//             Total No. of Orders:
//             <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border border-[#969595] min-w-[80px]'>
//               {totalorders}
//             </span>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { useState, useContext, useEffect } from 'react'
import { Authdatacontext } from '../Context/Autncontext'
import axios from 'axios'

function Home() {

  const [totalproducts, settotalproducts] = useState(0)
  const [totalorders, settotalorders] = useState(0)
  const { serverurl } = useContext(Authdatacontext)

  const fetchcount = async () => {
    try {
      const products = await axios.get(`${serverurl}/api/product/list`, {}, { withCredentials: true })
      settotalproducts(products.data.length)

      const orders = await axios.post(`${serverurl}/api/order/list`, {}, { withCredentials: true })
      settotalorders(orders.data.length)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchcount()
  }, [])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>
      
      <Nav />
      <Sidebar />

      {/* ml-[18%] kyunke Sidebar fixed hai aur 18% wide hai */}
      <div className='ml-[18%] flex items-start justify-start flex-col gap-[40px] py-[100px] px-6 md:px-10'>
        
        <h1 className='text-[35px] text-[#afe2f2]'>Zoom Store Admin Panel</h1>

        <div className='flex items-start justify-start gap-[30px] flex-col md:flex-row w-full'>

          <div className='text-[#dcfafd] w-full md:w-[350px] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop-blur-lg md:text-[25px] text-[20px] border border-[#969595] px-4'>
            Total No. of Products:
            <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border border-[#969595] min-w-[80px]'>
              {totalproducts}
            </span>
          </div>

          <div className='text-[#dcfafd] w-full md:w-[350px] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop-blur-lg md:text-[25px] text-[20px] border border-[#969595] px-4'>
            Total No. of Orders:
            <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border border-[#969595] min-w-[80px]'>
              {totalorders}
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home