// // import React, { useContext, useState, useEffect } from 'react'
// // import Nav from '../components/Nav'
// // import Sidebar from '../components/Sidebar'
// // import { SiEbox } from "react-icons/si";
// // import { Authdatacontext } from '../Context/Autncontext';
// // import axios from 'axios';
// // function Orders() {

// // let [orders,setorders] = useState([])
// // let {serverurl} = useContext(Authdatacontext)

// // const fetchallorders = async()=>{
// //   try{
// // const result = await axios.post(serverurl + "/api/order/list",{} , {withCredentials:true})
// // setorders(result.data.reverse())
// // }
// //   catch(error){
// //     console.log(error)
// //   }
// // }

// // const statushandler = async (e,orderId) =>{
// //   try{
// // const result = await axios.post(serverurl + '/api/order/status',{orderId,status:e.target.value},{withCredentials:true})
// // if(result.data){
// //   await fetchallorders()
// // }
// //   }
// //   catch(error){
// // console.log(result.data.message)

// //   }
// // }














// // useEffect(()=>{
// //   fetchallorders()
// // },[])




// //   return (
// //     <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from -[#141414] to-[#0c2025] text-[white]  '>
// // <Nav/>
// // <div className='w-[100%] h-[100%] flex items-center lg:justify-start justify-center  '>
// //   <Sidebar/>
// //   <div className='lg:w-[85%] md:w-[70%] h-[100%] lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]   '>
// // <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white  '>
// // All  orders Lists
// // </div>
// // {
// //   orders.map((order,index)=>(
// // <div key={index} className='w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]    '>
// // <SiEbox className='w-[60px] h-[60px] text-[black] p-[5px] rounded-lg bg-[white]   ' />
// // <div>
// //   <div className='flex items-start justify-center fle-col gap-[5px] text-[16px] text-[#56dbfc]  '>
// //     {
// //       order.items.map((item,index)=>{
// //         if(index === order.items.length - 1){
// //           return <p key={index}>{item.name.toUpperCase()} * {item.quantity}<span>{item.size}</span></p>
// //         } else{
// //           return <p key={index}>{item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>,</p>
// //         }
// //       })
// //     }
// //   </div>
// //   <div className='text-[15px] text-green-100      '>
// //     <p> {order.address.firstname+ "" + order.address.lastname}</p>
// //      <p>{order.address.street + " , "}</p>
// //      <p>{order.address.city + " , " + order.address.state +" , " + order.address.country + " , " + order.address.pincode  }</p>
// // <p>{order.address.phone}</p>     
     
// //       </div>

// // </div>
// // <div className='   '>
// //   <p>Items:{order.items.length}  </p>
// //   <p>Method:{order.paymentmethod}  </p>
// //   <p>Payment: {order.payment ? "Done" : "pending"  }  </p>
// //   <p>Date:{new Date(order.date).toLocaleDateString()}   </p>
// //   <p className='text-[20px] text-[white]   '>Rs{order.amount}</p>

// //   </div>
// // <select value={order.status}  className='px-[5px] py-[10px] bg-slate-500 rounded-lg border-[1px] border-[#96eef3]    '>
// //   <option value="Order Placed">Order Placed </option>
// //   <option value="Packing">Packing</option>
// //   <option value="Shipped">Shipped</option>
// //   <option value="Out For Delivery">Out For Delivery</option>
// //   <option value="Delivered">Delivered</option>
// // </select>









// //   </div>
// //    ))
// // }
// //   </div>
// // </div>
// //     </div>
// //   )
// // }

// // export default Orders
// import React, { useContext, useState, useEffect } from 'react'
// import Nav from '../components/Nav'
// import Sidebar from '../components/Sidebar'
// import { SiEbox } from "react-icons/si"
// import { Authdatacontext } from '../Context/Autncontext'
// import axios from 'axios'

// function Orders() {

//   const [orders, setorders] = useState([])
//   const { serverurl } = useContext(Authdatacontext)

//   // ✅ Fetch all orders
//   const fetchallorders = async () => {
//     try {
//       const result = await axios.post(
//         serverurl + "/api/order/list",
//         {},
//         { withCredentials: true }
//       )

//       setorders(result.data.reverse())
//     } catch (error) {
//       console.log("Fetch Orders Error:", error)
//     }
//   }

//   // ✅ Status update handler
//   const statushandler = async (e, orderId) => {
//     try {
//       const result = await axios.post(
//         serverurl + '/api/order/status',
//         {
//           orderId,
//           status: e.target.value
//         },
//         { withCredentials: true }
//       )

//       if (result.data) {
//         fetchallorders()
//       }

//     } catch (error) {
//       console.log("Status Update Error:", error)
//     }
//   }

//   useEffect(() => {
//     fetchallorders()
//   }, [])

//   return (
//     <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>

//       <Nav />

//       <div className='w-full h-full flex items-center lg:justify-start justify-center'>

//         <Sidebar />

//         <div className='lg:w-[85%] md:w-[70%] w-full h-full lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]'>

//           <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white'>
//             All Orders List
//           </div>

//           {
//             orders.map((order, index) => (
//               <div
//                 key={index}
//                 className='w-[90%] bg-slate-600 rounded-xl flex flex-col lg:flex-row justify-between p-[10px] md:px-[20px] gap-[20px]'
//               >

//                 {/* ICON */}
//                 <SiEbox className='w-[60px] h-[60px] text-black p-[5px] rounded-lg bg-white' />

//                 {/* ITEMS */}
//                 <div>
//                   <div className='flex flex-col gap-[5px] text-[16px] text-[#56dbfc]'>

//                     {
//                       order.items.map((item, i) => (
//                         <p key={i}>
//                           {item.name.toUpperCase()} * {item.quantity}
//                           <span className='ml-2'>{item.size}</span>
//                         </p>
//                       ))
//                     }

//                   </div>

//                   {/* ADDRESS */}
//                   <div className='text-[15px] text-green-100 mt-2'>
//                     <p>
//                       {order.address.firstname + " " + order.address.lastname}
//                     </p>
//                     <p>{order.address.street}</p>
//                     <p>
//                       {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.pincode}
//                     </p>
//                     <p>{order.address.phone}</p>
//                   </div>
//                 </div>

//                 {/* DETAILS */}
//                 <div>
//                   <p>Items: {order.items.length}</p>
//                   <p>Method: {order.paymentmethod}</p>
//                   <p>Payment: {order.payment ? "Done" : "Pending"}</p>
//                   <p>Date: {new Date(order.date).toLocaleDateString()}</p>
//                   <p className='text-[20px]'>Rs {order.amount}</p>
//                 </div>

//                 {/* STATUS */}
//                 <div>
//                   <select
//                     value={order.status}
//                     onChange={(e) => statushandler(e, order._id)}
//                     className='px-[10px] py-[10px] bg-slate-500 rounded-lg border border-[#96eef3]'
//                   >
//                     <option value="Order Placed">Order Placed</option>
//                     <option value="Packing">Packing</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Out For Delivery">Out For Delivery</option>
//                     <option value="Delivered">Delivered</option>
//                   </select>
//                 </div>

//               </div>
//             ))
//           }

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Orders
// import React, { useContext, useState, useEffect } from 'react'
// import Nav from '../components/Nav'
// import Sidebar from '../components/Sidebar'
// import { SiEbox } from "react-icons/si";
// import { Authdatacontext } from '../Context/Autncontext';
// import axios from 'axios';
// function Orders() {

// let [orders,setorders] = useState([])
// let {serverurl} = useContext(Authdatacontext)

// const fetchallorders = async()=>{
//   try{
// const result = await axios.post(serverurl + "/api/order/list",{} , {withCredentials:true})
// setorders(result.data.reverse())
// }
//   catch(error){
//     console.log(error)
//   }
// }

// const statushandler = async (e,orderId) =>{
//   try{
// const result = await axios.post(serverurl + '/api/order/status',{orderId,status:e.target.value},{withCredentials:true})
// if(result.data){
//   await fetchallorders()
// }
//   }
//   catch(error){
// console.log(result.data.message)

//   }
// }














// useEffect(()=>{
//   fetchallorders()
// },[])




//   return (
//     <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from -[#141414] to-[#0c2025] text-[white]  '>
// <Nav/>
// <div className='w-[100%] h-[100%] flex items-center lg:justify-start justify-center  '>
//   <Sidebar/>
//   <div className='lg:w-[85%] md:w-[70%] h-[100%] lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]   '>
// <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white  '>
// All  orders Lists
// </div>
// {
//   orders.map((order,index)=>(
// <div key={index} className='w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]    '>
// <SiEbox className='w-[60px] h-[60px] text-[black] p-[5px] rounded-lg bg-[white]   ' />
// <div>
//   <div className='flex items-start justify-center fle-col gap-[5px] text-[16px] text-[#56dbfc]  '>
//     {
//       order.items.map((item,index)=>{
//         if(index === order.items.length - 1){
//           return <p key={index}>{item.name.toUpperCase()} * {item.quantity}<span>{item.size}</span></p>
//         } else{
//           return <p key={index}>{item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>,</p>
//         }
//       })
//     }
//   </div>
//   <div className='text-[15px] text-green-100      '>
//     <p> {order.address.firstname+ "" + order.address.lastname}</p>
//      <p>{order.address.street + " , "}</p>
//      <p>{order.address.city + " , " + order.address.state +" , " + order.address.country + " , " + order.address.pincode  }</p>
// <p>{order.address.phone}</p>     
     
//       </div>

// </div>
// <div className='   '>
//   <p>Items:{order.items.length}  </p>
//   <p>Method:{order.paymentmethod}  </p>
//   <p>Payment: {order.payment ? "Done" : "pending"  }  </p>
//   <p>Date:{new Date(order.date).toLocaleDateString()}   </p>
//   <p className='text-[20px] text-[white]   '>Rs{order.amount}</p>

//   </div>
// <select value={order.status}  className='px-[5px] py-[10px] bg-slate-500 rounded-lg border-[1px] border-[#96eef3]    '>
//   <option value="Order Placed">Order Placed </option>
//   <option value="Packing">Packing</option>
//   <option value="Shipped">Shipped</option>
//   <option value="Out For Delivery">Out For Delivery</option>
//   <option value="Delivered">Delivered</option>
// </select>









//   </div>
//    ))
// }
//   </div>
// </div>
//     </div>
//   )
// }

// export default Orders
import React, { useContext, useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { SiEbox } from "react-icons/si"
import { Authdatacontext } from '../Context/Autncontext'
import axios from 'axios'

function Orders() {

  const [orders, setorders] = useState([])
  const { serverurl } = useContext(Authdatacontext)

  // ✅ Fetch all orders
  const fetchallorders = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken")
      const result = await axios.post(
        serverurl + "/api/order/list",
        {},
        { withCredentials: true, headers: adminToken ? { token: adminToken } : {} }
      )

      setorders(result.data.reverse())
    } catch (error) {
      console.log("Fetch Orders Error:", error)
    }
  }

  // ✅ Status update handler
  const statushandler = async (e, orderId) => {
    try {
      const adminToken = localStorage.getItem("adminToken")
      const result = await axios.post(
        serverurl + '/api/order/status',
        {
          orderId,
          status: e.target.value
        },
        { withCredentials: true, headers: adminToken ? { token: adminToken } : {} }
      )

      if (result.data) {
        fetchallorders()
      }

    } catch (error) {
      console.log("Status Update Error:", error)
    }
  }

  useEffect(() => {
    fetchallorders()
  }, [])

  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>

      <Nav />

      <div className='w-full h-full flex items-center lg:justify-start justify-center'>

        <Sidebar />

        <div className='lg:w-[85%] md:w-[70%] w-full h-full lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]'>

          <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white'>
            All Orders List
          </div>

          {
            orders.map((order, index) => (
              <div
                key={index}
                className='w-[90%] bg-slate-600 rounded-xl flex flex-col lg:flex-row justify-between p-[10px] md:px-[20px] gap-[20px]'
              >

                {/* ICON */}
                <SiEbox className='w-[60px] h-[60px] text-black p-[5px] rounded-lg bg-white' />

                {/* ITEMS */}
                <div>
                  <div className='flex flex-col gap-[5px] text-[16px] text-[#56dbfc]'>

                    {
                      order.items.map((item, i) => (
                        <p key={i}>
                          {item.name.toUpperCase()} * {item.quantity}
                          <span className='ml-2'>{item.size}</span>
                        </p>
                      ))
                    }

                  </div>

                  {/* ADDRESS */}
                  <div className='text-[15px] text-green-100 mt-2'>
                    <p>
                      {order.address.firstname + " " + order.address.lastname}
                    </p>
                    <p>{order.address.street}</p>
                    <p>
                      {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.pincode}
                    </p>
                    <p>{order.address.phone}</p>
                  </div>
                </div>

                {/* DETAILS */}
                <div>
                  <p>Items: {order.items.length}</p>
                  <p>Method: {order.paymentmethod}</p>
                  <p>Payment: {order.payment ? "Done" : "Pending"}</p>
                  <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p className='text-[20px]'>Rs {order.amount}</p>
                </div>

                {/* STATUS */}
                <div>
                  <select
                    value={order.status}
                    onChange={(e) => statushandler(e, order._id)}
                    className='px-[10px] py-[10px] bg-slate-500 rounded-lg border border-[#96eef3]'
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Orders