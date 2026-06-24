// // import React, { useContext, useEffect, useState } from 'react'
// // import { shopdatacontext } from '../Context/shopcontext'
// // import { AuthContext } from '../Context/Authcontext'
// // import Tittle from '../Components/Tittle'
// // function order() {
  
// //   let [orderdata,setorderdata] = useState([])
// //     let { currency } = useContext(shopdatacontext)
// //   let { serverurl } = useContext(AuthContext)
  

// // const loadorderdata = async () => {

// //   try {

// //     const result = await axios.post(
// //       serverurl + '/api/order/userdata',
// //       {},
// //       { withCredentials: true }
// //     )

// //     if (result.data) {

// //       let allordersitems = []

// //       result.data.map((order) => {

// //         order.items.map((item) => {

// //           item['status'] = order.status
// //           item['payment'] = order.payment
// //           item['paymentmethod'] = order.paymentMETHOD
// //           item['date'] = order.date

// //           allordersitems.push(item)

// //         })

// //       })

// //       setorderdata(allordersitems.reverse())

// //     }

// //   } catch (error) {

// //     console.log(error)

// //   }

// // }

// // useEffect(() => {
// //   loadorderdata()
// // }, [])














// //   return (
// //     <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col lg:flex-row gap-[50px] px-[20px] py-[40px]'>
// // <div className='h-[8%] w-[100%] text-center mt-[80px]  '>
// // <Tittle text1={"MY"} text2={"ORDER"}/>
// // </div>
// // <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]   '>
// // {

// // orderdata.map((item,index)=>(
// //   <div key={index} className='w-[100%] h-[10%] border-t border-b '>
// // <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative    '>
// //  <img src={item.img1} alt="" className='w-[130px] h-[130px] rounded-md  '/> 
// // <div className='flex items-start justify-center flex-col gap-[5px]   '>
// // <p className='md:text-[25px] text-[20px] text-[#f3f9fc]   '>{item.name} </p>
// // <div className='flex items-center gap-[8px] md:gap-[20px]   '></div>
// // <p className='md:text-[18px] text-[12px] text-[#aaf4e7]     '>{currency}{item.price} </p>
// // <p className='md:text-[18px] text-[12px] text-[#aaf4e7]     '>Quantity:{item.quantity} </p>
// // <p className='md:text-[18px] text-[12px] text-[#aaf4e7]     '>Size: {item.size} </p>
// // </div>

// // </div>
// //   </div>
// // ))





// // }
// // </div>
// //     </div>
// //   )
// // }

// // export default order
// import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import { shopdatacontext } from '../Context/shopcontext'
// import { AuthContext } from '../Context/Authcontext'
// import Tittle from '../Components/Tittle'

// function Order() {

//   const [orderdata, setorderdata] = useState([])

//   const { currency } = useContext(shopdatacontext)
//   const { serverurl } = useContext(AuthContext)

//   const loadorderdata = async () => {

//     try {

//       const result = await axios.post(
// serverurl + '/api/order/userorder',
//         {},
//         { withCredentials: true }
//       )

//       if (result.data) {

//         let allordersitems = []

//         result.data.map((order) => {

//           order.items.map((item) => {

//             item['status'] = order.status
//             item['payment'] = order.payment
//             item['paymentmethod'] = order.paymentMETHOD
//             item['date'] = order.date

//             allordersitems.push(item)

//           })

//         })

//         setorderdata(allordersitems.reverse())

//       }

//     } catch (error) {

//       console.log(error)

//     }

//   }

//   useEffect(() => {
//     loadorderdata()
//   }, [])

//   return (

//     <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col lg:flex-row gap-[50px] px-[20px] py-[40px]'>

//       <div className='h-[8%] w-[100%] text-center mt-[80px]'>
//         <Tittle text1={"MY"} text2={"ORDER"} />
//       </div>

//       <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'>

//         {

//           orderdata.map((item, index) => (

//             <div key={index} className='w-[100%] border-t border-b py-[20px]'>

//               <div className='w-[100%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative'>

//                 <img
//                   src={item.img1}
//                   alt=""
//                   className='w-[130px] h-[130px] rounded-md'
//                 />

//                 <div className='flex items-start justify-center flex-col gap-[5px]'>

//                   <p className='md:text-[25px] text-[20px] text-[#f3f9fc]'>
//                     {item.name}
//                   </p>

//                   <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
//                     {currency}{item.price}
//                   </p>

//                   <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
//                     Quantity: {item.quantity}
//                   </p>

//                   <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
//                     Size: {item.size}
//                   </p>

//                   <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
//                     Status: {item.status}
//                   </p>

//                 </div>

//               </div>

//             </div>

//           ))

//         }

//       </div>

//     </div>

//   )
// }

// export default Order




import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { shopdatacontext } from '../Context/shopcontext'
import { AuthContext } from '../Context/Authcontext'
import Tittle from '../Components/Tittle'

function Order() {

  const [orderdata, setorderdata] = useState([])
  const { currency } = useContext(shopdatacontext)
  const { serverurl } = useContext(AuthContext)

  const loadorderdata = async () => {
    try {
      const result = await axios.post(
        serverurl + '/api/order/userorder',
        {},
        { withCredentials: true }
      )

      if (result.data) {
        let allordersitems = []

        result.data.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentmethod'] = order.paymentMETHOD
            item['date'] = order.date
            allordersitems.push(item)
          })
        })

        setorderdata(allordersitems.reverse())
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadorderdata()
  }, [])

  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] px-[20px] py-[40px]'>

      {/* Heading */}
      <div className='w-full text-center mt-[80px] mb-[40px]'>
        <Tittle text1={"MY"} text2={"ORDER"} />
      </div>

      {/* Orders List */}
      <div className='w-full max-w-[900px] mx-auto flex flex-col gap-[16px]'>

        {orderdata.length === 0 ? (
          <p className='text-center text-[#aaf4e7] text-[18px] mt-[50px]'>
            No orders found. Start shopping now!
          </p>
        ) : (

 orderdata.map((item, index) => (

  <div key={index} className='w-full border-t border-b py-[20px]'>

    <div className='w-full flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative'>

      <img
        src={item.image1}
        alt={item.name}
        className='w-[130px] h-[130px] object-cover rounded-md'
      />

      <div className='flex flex-col items-start justify-center gap-[5px]'>

        <p className='md:text-[25px] text-[20px] text-[#f3f9fc]'>
          {item.name}
        </p>

        <div className='flex items-center flex-wrap gap-[8px] md:gap-[20px]'>

          <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
            {currency}{item.price}
          </p>

          <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
            Quantity: {item.quantity}
          </p>

          <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>
            Size: {item.size}
          </p>

        </div>

        <div className='flex items-center'>

          <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>

            Date:

            <span className='text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px]'>
              {new Date(item.date).toDateString()}
            </span>

          </p>

        </div>

        <div className='flex items-center'>

          <p className='md:text-[16px] text-[12px] text-[#aaf4e7]'>
            Payment Method: {item.paymentmethod}
          </p>

        </div>

        {/* Status */}
        <div className='absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]'>

          <div className='flex items-center gap-[5px]'>

            <p className='w-2 h-2 rounded-full bg-green-500'></p>

            <p className='md:text-[17px] text-[10px] text-[#f3f9fc]'>
              {item.status}
            </p>

          </div>

        </div>

        {/* Button */}
        <div className='absolute md:right-[5%] right-[1%] md:top-[40%] top-[70%]'>

          <button
            className='md:px-[15px] px-[5px] py-[3px] md:py-[7px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] md:text-[16px] cursor-pointer active:bg-slate-500'
            onClick={loadorderdata}
          >
            Track Order
          </button>

        </div>

      </div>

    </div>

  </div>

))
        )}

      </div>
    </div>
  )
}

export default Order