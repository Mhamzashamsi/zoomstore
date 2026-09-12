// import  { useEffect, useState } from 'react'
// import  { useContext } from 'react'
// import Nav from '../components/Nav'
// import Sidebar from '../components/Sidebar'
// import { Authdatacontext } from '../Context/Autncontext'
// import axios from 'axios'

// function List() {

//   const [list, setlist] = useState([])
//   let {serverurl} = useContext(Authdatacontext)


// const fetchlist = async()=>{
//   try{
// let result = await axios.get(serverurl + '/api/product/list')
// setlist(result.data)
// console.log(result.data)
//   }
//   catch(error){
// console.log(error)
//   }
// }


// const removelist = async(id)=>{
//   try{
//     let result = await axios.post(`${serverurl}/api/product/remove/${id}`,{},{withCredentials:true})

// if(result.data){
//   fetchlist()
// }
// else{
//   console.log('failed to remove product')
// }

//   }
//   catch(error){
//     console.log('Error occurred while removing product')

//   }
// }




// useEffect(()=>{
//   fetchlist()
// },[])





//   return (
//     <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]     ' >

// <Nav/>
// <div className='w-[100%] h-[100%] flex items-center justify-start  '>
// <Sidebar/>
// <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px] '>
// <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white '>
// All Listed Products
// </div>
// {
//   list?. length > 0 ? (
//     list.map((items,index)=>(
//       <div className='w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px] ' key={items._id}>
// <img src={items.image1} alt="" className='w-[30%] md:w-[120px] h-[90%] rounded-lg ' />
//     <div className='w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px] '>
// <div className='w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]   '>{items.name}</div>

//     <div className='md:text-[17px] text-[15px] text-[#bef3da] '>{items.category}</div>
//           <div className='md:text-[17px] text-[15px] text-[#bef3da] '>${items.price}</div>
//     </div>

// <div className='w-[10%] h-[100%] bg-transparent flex items-center justify-center   '>
//   <span className='w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer ' onClick={()=>{removelist(items._id)}}>X</span>
// </div>


//       </div>
//     ))
//   )
//   :(
//     <div className='text-white text-lg'>
//       No products listed yet
//     </div>
//   )
// }
// </div>






// </div>
//     </div>
//   )
// }

// export default List
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { Authdatacontext } from '../Context/Autncontext'
import axios from 'axios'
import { toast } from 'react-toastify'

function List() {
  const [list, setlist] = useState([])
  let { serverurl } = useContext(Authdatacontext)

  const fetchlist = async () => {
    try {
      let result = await axios.get(serverurl + '/api/product/list')
      setlist(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const removelist = async (id) => {
    try {
      let result = await axios.post(`${serverurl}/api/product/remove/${id}`, {}, { withCredentials: true })
      if (result.data) {
        fetchlist()
      toast.success("Product removed successfully")
      }
    } catch (error) {
      console.log('Error occurred while removing product')
    }
  }

  useEffect(() => {
    fetchlist()
  }, [])

  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>
      <Nav />

      <div className='flex'>
        <Sidebar />

        {/* Main Content */}
        <div className='flex-1 min-h-screen mt-[70px] py-[40px] px-[20px]
                        ml-[60px] md:ml-[230px] lg:ml-[280px]'>

          <h1 className='text-[26px] sm:text-[32px] md:text-[40px] font-semibold mb-[30px] text-white'>
            All Listed Products
          </h1>

          <div className='flex flex-col gap-[15px] w-full'>
            {list?.length > 0 ? (
              list.map((items) => (
                <div
                  key={items._id}
                  className='w-full bg-slate-700 rounded-xl flex items-center
                             gap-[10px] sm:gap-[20px] p-[10px] sm:p-[15px]
                             hover:bg-slate-600 transition-colors duration-200'
                >
                  {/* Image */}
                  <img
                    src={items.image1}
                    alt={items.name}
                    className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]
                               rounded-lg object-cover flex-shrink-0'
                  />

                  {/* Info */}
                  <div className='flex-1 flex flex-col gap-[3px] overflow-hidden'>
                    <p className='text-[13px] sm:text-[16px] md:text-[19px]
                                  text-[#bef0f3] font-medium truncate'>
                      {items.name}
                    </p>
                    <p className='text-[11px] sm:text-[13px] md:text-[15px] text-[#bef3da]'>
                      {items.category}
                    </p>
                    <p className='text-[11px] sm:text-[13px] md:text-[15px] text-[#bef3da] font-semibold'>
                      ${items.price}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removelist(items._id)}
                    className='flex-shrink-0 w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]
                               flex items-center justify-center rounded-lg
                               text-[#bef0f3] hover:bg-red-500 hover:text-white
                               transition-all duration-200 text-[14px] sm:text-[16px]
                               border border-transparent hover:border-red-400'
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <div className='text-white text-lg mt-[50px] text-center opacity-60'>
                No products listed yet
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default List