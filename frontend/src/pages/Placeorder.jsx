// import { useContext, useState } from 'react'
// import Cartotal from '../Components/Cartotal'
// import Tittle from '../Components/Tittle'
// import Jsbank from '../assets/Jsbank.jpg'
// import { shopdatacontext } from '../Context/shopcontext'
// import { AuthContext } from '../Context/Authcontext'
// import axios from 'axios'

// function Placeorder() {


// const {caritems, setcartitems,getcartamount,delivery_fee, products} = useContext(shopdatacontext)
// let {serverurl} = useContext(AuthContext)
//   const [method, setmethod] = useState("cod")
//   const [formdata, setformdata] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//     country: "",
//     phone: "",
//   })


//   const onchangehandler = (e) =>{
// const name = e.target.name;
// const value = e.target.value;
// setformdata(data =>({...data,[name]:value}))}

// const onsumbithandler = async (e) =>{
//   e.preventDefault()
// try{
//   let orderitems = []
// for(const items in cartitems){
//   for(item in cartitems[items]){
//     if(cartitems[items][item] > 0  ){
//       const iteminfo = structuredClone(products.find(product => product._id === items))
//       if(iteminfo){
//         iteminfo.size = item
//         iteminfo.quantity = cartitems[items][item]
//         orderitems.push(iteminfo)
//       }
//     }
//   }
// }
// let orderdata = {
//   address:formdata,
//   items:orderitems,
//   amount:getcartamount() + delivery_fee
// }

// switch(method){
//   case 'cod':
//     const result =await axios.post(serverurl + '/api/order/placeorder',orderdata, {withCredentials:true})
//     console.log(result.data)
//     break;
//     default:
//       break;
// }



// catch(error){
//   console.log(error)
// }







// }



// }
  

//   return (

//     <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col lg:flex-row gap-[50px] px-[20px] py-[40px]'>

//       {/* LEFT SIDE */}
//       <div className='lg:w-[50%] w-full flex items-center justify-center'>

//         <form className='lg:w-[70%] w-full flex flex-col gap-[15px]'>

//           <div>
//             <Tittle text1={"DELIVERY"} text2={"INFORMATION"} />
//           </div>

//           {/* FIRST + LAST NAME */}
//           <div className='w-full flex items-center justify-between gap-[15px]'>
//             <input
//               type="text"
//               placeholder='First name'
//               className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
//               required onChange={onchangehandler} name='firstname' value={formdata.firstname}
//             />

//             <input
//               type="text"
//               placeholder='Last name'
//               className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
//               required onChange={onchangehandler} name='lastname' value={formdata.lastname}
//             />
//           </div>

//           {/* EMAIL */}
//           <input
//             type="email"
//             placeholder='Email address'
//             className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] text-white outline-none'
//             required onChange={onchangehandler} name='email' value={formdata.email}
//           />

//           {/* STREET */}
//           <input
//             type="text"
//             placeholder='Street'
//             className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] text-white outline-none'
//             required onChange={onchangehandler} name='street' value={formdata.street}
//           />

//           {/* CITY + STATE */}
//           <div className='w-full flex items-center justify-between gap-[15px]'>

//             <input
//               type="text"
//               placeholder='City'
//               className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
//               required onChange={onchangehandler} name='city' value={formdata.city}
//             />

//             <input
//               type="text"
//               placeholder='State'
//               className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
//               required onChange={onchangehandler} name='this.state.first' value={formdata.state}
//             />
//           </div>

//           {/* PINCODE + COUNTRY */}
//           <div className='w-full flex items-center justify-between gap-[15px]'>

//             <input
//               type="text"
//               placeholder='Pincode'
//               className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
//               required onChange={onchangehandler} name='pincode' value={formdata.pincode}
//             />

//             <input
//               type="text"
//               placeholder='Country'
//               className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
//               required onChange={onchangehandler} name='country' value={formdata.country}
//             />
//           </div>

//           {/* PHONE */}
//           <input
//             type="text"
//             placeholder='Phone'
//             className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] text-white outline-none'
//             required onChange={onchangehandler} name='phone' value={formdata.phone}
//           />

//           {/* BUTTON */}
//           <button
//             type='submit'
//             className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[12px] rounded-2xl text-white border border-[#80808049] mt-[20px] hover:bg-[#3bcee86b] duration-300'
//           >
//             PLACE ORDER
//           </button>

//         </form>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className='lg:w-[50%] w-full flex items-center justify-center'>

//         <div className='lg:w-[70%] w-full flex items-center justify-center gap-[20px] flex-col'>

//           <Cartotal />

//           <div className='py-[10px]'>
//             <Tittle text1={"PAYMENT"} text2={"METHOD"} />
//           </div>

//           <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[10px]'>

//             {/* JS BANK */}
//             <button
//               type='button'
//               onClick={() => setmethod('Jsbank')}
//               className={`w-[170px] h-[60px] rounded-md overflow-hidden duration-200 
//               ${method === 'Jsbank'
//                   ? 'border-[4px] border-blue-900'
//                   : 'border border-gray-500'
//                 }`}
//             >
//               <img
//                 src={Jsbank}
//                 alt="JS Bank"
//                 className='w-full h-full object-cover'
//               />
//             </button>

//             {/* COD */}
//             <button
//               type='button'
//               onClick={() => setmethod('cod')}
//               className={`w-[220px] h-[60px] bg-gradient-to-t from-[#95b3f8] to-white text-[14px] px-[20px] rounded-md text-[#332f6f] font-bold duration-200
//               ${method === 'cod'
//                   ? 'border-[4px] border-blue-900'
//                   : 'border border-gray-500'
//                 }`}
//             >
//               CASH ON DELIVERY
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Placeorder
import { useContext, useState } from 'react'
import Cartotal from '../Components/Cartotal'
import Tittle from '../Components/Tittle'
import Jsbank from '../assets/Jsbank.jpg'
import { shopdatacontext } from '../Context/shopcontext'
import { AuthContext } from '../Context/Authcontext'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../Components/Loading'

function Placeorder() {


  const navigate = useNavigate()

  const {
    cartitems,
    setcartitems,
    getcartamount,
    delivery_charges,
    products
  } = useContext(shopdatacontext)
  // let { serverurl } = useContext(AuthContext)
let { serverurl, token } = useContext(AuthContext)
  const [method, setmethod] = useState("cod")
let [loading, setloading] = useState(false)
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  })

  // ================= ONCHANGE =================

  const onchangehandler = (e) => {

    const name = e.target.name
    const value = e.target.value

    setformdata(data => ({
      ...data,
      [name]: value
    }))
  }

  // ================= ONSUBMIT =================

  const onsumbithandler = async (e) => {

    e.preventDefault()

    try {
    setloading(true)

      let orderitems = []

      for (const items in cartitems) {

        for (const item in cartitems[items]) {

          if (cartitems[items][item] > 0) {

            const iteminfo = structuredClone(
              products.find(product => product._id === items)
            )

            if (iteminfo) {

              iteminfo.size = item
              iteminfo.quantity = cartitems[items][item]

              orderitems.push(iteminfo)
            }
          }
        }
      }

      let orderdata = {
        address: formdata,
        items: orderitems,
        amount: getcartamount() + delivery_charges
      }

      switch (method) {

        case 'cod':

          // const result = await axios.post(
          //   serverurl + '/api/order/placeorder',
          //   orderdata,
          //   { withCredentials: true }
          // )
          console.log("ORDER DATA:", orderdata)
          const result = await axios.post(
  serverurl + '/api/order/placeorder',
  orderdata,
  {
    headers: {
      token: token
    }
  }
)

          console.log(result.data)

          if (result.data.success) {

            setcartitems({})
            toast.success("Order placed successfully")
                        navigate("/order")
                        setloading(false)

          } else {
          setloading(false)
          toast.error("Failed to place order")
          console.log(result.data.message)

          }
          break

        default:
          break
      }

    } catch (error) {
setloading(false)
      console.log(error)

    }
  }

  return (

    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col lg:flex-row gap-[50px] px-[20px] py-[40px]'>

      {/* LEFT SIDE */}
      <div className='lg:w-[50%] w-full flex items-center justify-center'>

        <form
          onSubmit={onsumbithandler}
          className='lg:w-[70%] w-full flex flex-col gap-[15px]'
        >

          <div>
            <Tittle text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          {/* FIRST + LAST NAME */}

          <div className='w-full flex items-center justify-between gap-[15px]'>

            <input
              type="text"
              placeholder='First name'
              className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
              required
              onChange={onchangehandler}
              name='firstname'
              value={formdata.firstname}
            />

            <input
              type="text"
              placeholder='Last name'
              className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
              required
              onChange={onchangehandler}
              name='lastname'
              value={formdata.lastname}
            />

          </div>

          {/* EMAIL */}

          <input
            type="email"
            placeholder='Email address'
            className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] text-white outline-none'
            required
            onChange={onchangehandler}
            name='email'
            value={formdata.email}
          />

          {/* STREET */}

          <input
            type="text"
            placeholder='Street'
            className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] text-white outline-none'
            required
            onChange={onchangehandler}
            name='street'
            value={formdata.street}
          />

          {/* CITY + STATE */}

          <div className='w-full flex items-center justify-between gap-[15px]'>

            <input
              type="text"
              placeholder='City'
              className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
              required
              onChange={onchangehandler}
              name='city'
              value={formdata.city}
            />

            <input
              type="text"
              placeholder='State'
              className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
              required
              onChange={onchangehandler}
              name='state'
              value={formdata.state}
            />

          </div>

          {/* PINCODE + COUNTRY */}

          <div className='w-full flex items-center justify-between gap-[15px]'>

            <input
              type="text"
              placeholder='Pincode'
              className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
              required
              onChange={onchangehandler}
              name='pincode'
              value={formdata.pincode}
            />

            <input
              type="text"
              placeholder='Country'
              className='w-[50%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white outline-none'
              required
              onChange={onchangehandler}
              name='country'
              value={formdata.country}
            />

          </div>

          {/* PHONE */}

          <input
            type="text"
            placeholder='Phone'
            className='w-full h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] text-white outline-none'
            required
            onChange={onchangehandler}
            name='phone'
            value={formdata.phone}
          />

          {/* BUTTON */}

          <button
            type='submit'
            className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[12px] rounded-2xl text-white border border-[#80808049] mt-[20px] hover:bg-[#3bcee86b] duration-300'
          >
                        {loading ? <Loading/> : 'PLACE ORDER'}
            
          </button>

        </form>

      </div>

      {/* RIGHT SIDE */}

      <div className='lg:w-[50%] w-full flex items-center justify-center'>

        <div className='lg:w-[70%] w-full flex items-center justify-center gap-[20px] flex-col'>

          <Cartotal />

          <div className='py-[10px]'>
            <Tittle text1={"PAYMENT"} text2={"METHOD"} />
          </div>

          <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[10px]'>

            {/* JS BANK */}

            <button
              type='button'
              onClick={() => setmethod('Jsbank')}
              className={`w-[170px] h-[60px] rounded-md overflow-hidden duration-200 
              ${method === 'Jsbank'
                  ? 'border-[4px] border-blue-900'
                  : 'border border-gray-500'
                }`}
            >

              <img
                src={Jsbank}
                alt="JS Bank"
                className='w-full h-full object-cover'
              />

            </button>

            {/* COD */}

            <button
              type='button'
              onClick={() => setmethod('cod')}
              className={`w-[220px] h-[60px] bg-gradient-to-t from-[#95b3f8] to-white text-[14px] px-[20px] rounded-md text-[#332f6f] font-bold duration-200
              ${method === 'cod'
                  ? 'border-[4px] border-blue-900'
                  : 'border border-gray-500'
                }`}
            >
              CASH ON DELIVERY
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Placeorder