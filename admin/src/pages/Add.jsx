import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import upload from '../assets/upload.jpg'
import { useState } from 'react'
import { Authdatacontext } from '../Context/Autncontext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from "../components/Loading"

function Add() {

const [image1, setImage1] = useState(false)
const [image2, setImage2] = useState(false)
const [image3, setImage3] = useState(false)
const [image4, setImage4] = useState(false)
const [message, setMessage] = useState('')
const [name,setname] = useState('')
const [description,setdescription] = useState('')
const [price,setprice] = useState('')
const [category,setcategory] = useState('Mens')
const [subcategory,setsubcategory] = useState('TopWear')
const [bestseller,setbestseller] = useState(false)
const [sizes,setsizes] = useState([])
let {serverurl} = useContext(Authdatacontext)
let [loading, setloading] = useState(false)
const HandleAddProduct = async (e) => {
  e.preventDefault()
  try {
    setloading(true)
    setMessage('')

    let formdata = new FormData()
    formdata.append("image1", image1)
    formdata.append("image2", image2)
    formdata.append("image3", image3)
    formdata.append("image4", image4)
    formdata.append("name", name)
    formdata.append("description", description)
    formdata.append("price", price)
    formdata.append("category", category)
    formdata.append("subcategory", subcategory)
    formdata.append("bestseller", bestseller)
    formdata.append("sizes", JSON.stringify(sizes))

    let result = await axios.post(serverurl + "/api/product/addproduct", formdata, {withCredentials: true})
toast.success("Product added successfully")
    setloading(false)
    if(result.data){
      setMessage('✅ Product has been added successfully!')
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
      setname('')
      setdescription('')
      setprice('')
      setcategory('Mens')
      setsubcategory('TopWear')
      setbestseller(false)
      setsizes([])
    }

  } catch(error) {
    console.log("add product error", error.response?.data?.message)
    setMessage(`❌ Error: ${error.response?.data?.message || "error adding product"}`)
  } finally {
    setloading(false)
  }
}

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative'>
      <Nav />
      <Sidebar/>

      <div className='w-[80%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0 bottom-[5%]'>
        <form action="" onSubmit={HandleAddProduct} encType="multipart/form-data"   className='w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]'>

          <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-white py-[10px]'>Add Product page</div>

          {message && (
            <div className={`w-[80%] px-[20px] py-[15px] rounded-lg text-[16px] font-semibold ${message.startsWith('✅') ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {message}
            </div>
          )}

          <div className='w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Upload image</p>
            <div className='w-[100%] h-[100%] flex items-center justify-start'>

              <label htmlFor="image1" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                <img src={!image1 ? upload : URL.createObjectURL(image1)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]' />
                <input type="file" id='image1' hidden onChange={(e)=> setImage1(e.target.files[0])}    name="image1"  />
              </label>

              <label htmlFor="image2" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                <img src={!image2 ? upload : URL.createObjectURL(image2)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]' />
                <input type="file" id='image2' hidden onChange={(e)=> setImage2(e.target.files[0])}    name="image2"  />
              </label>

              <label htmlFor="image3" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                <img src={!image3 ? upload : URL.createObjectURL(image3)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]' />
                <input type="file" id='image3' hidden onChange={(e)=> setImage3(e.target.files[0])}    name="image3"  />
              </label>

              <label htmlFor="image4" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                <img src={!image4 ? upload : URL.createObjectURL(image4)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]' />
                <input type="file" id='image4' hidden onChange={(e)=> setImage4(e.target.files[0])}    name="image4"  />
              </label>

            </div>
          </div>

          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Name</p>
            <input type="text"  placeholder='Type here' className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]' onChange={(e)=>setname(e.target.value)} value={name}  required />
          </div>

          <div className='w-[80%] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Description</p>
            <textarea placeholder='Type here' className='w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] py-[10px] text-[18px] placeholder:text-[#ffffffc2]' onChange={(e)=>setdescription(e.target.value)} value={description} required />
          </div>

          <div className='w-[80%] flex items-center gap-[10px] flex-wrap'>
            <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
              <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>Product Category</p>
              <select className='bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=>setcategory(e.target.value)} value={category}>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
              <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>Sub-Category</p>
              <select className='bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=>setsubcategory(e.target.value)} value={subcategory}>
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterCollection">WinterCollection</option>
              </select>
            </div>
          </div>

          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Price</p>
            <input type="number" placeholder='$200' className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]' onChange={(e)=>setprice(e.target.value)} value={price} required/>
          </div>

          <div className='w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px] md:py-[0px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product size</p>
            <div className='flex items-center justify-start gap-[15px] flex-wrap'>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[2px] cursor-pointer ${sizes.includes("s") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={()=>setsizes(prev => prev.includes("s") ? prev.filter(item => item !== "s") : [...prev, "s"])}>S</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[2px] cursor-pointer ${sizes.includes("m") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={()=>setsizes(prev => prev.includes("m") ? prev.filter(item => item !== "m") : [...prev, "m"])}>M</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[2px] cursor-pointer ${sizes.includes("l") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={()=>setsizes(prev => prev.includes("l") ? prev.filter(item => item !== "l") : [...prev, "l"])}>L</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[2px] cursor-pointer ${sizes.includes("xl") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={()=>setsizes(prev => prev.includes("xl") ? prev.filter(item => item !== "xl") : [...prev, "xl"])}>XL</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[2px] cursor-pointer ${sizes.includes("xxl") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} onClick={()=>setsizes(prev => prev.includes("xxl") ? prev.filter(item => item !== "xxl") : [...prev, "xxl"])}>XXL</div>
            </div>
          </div>

          <div className='w-[80%] flex items-center gap-[10px] mt-[20px]'>
            <input type="checkbox" id='checkbox' className='w-[20px] h-[25px] cursor-pointer' onClick={()=>setbestseller(prev => !prev)} />
            <label htmlFor="checkbox" className='text-[18px] md:text-[22px] font-semibold'>Add to Bestseller</label>
          </div>

          <button
            disabled={loading}
            className={`w-[160px] px-[20px] py-[20px] rounded-xl flex items-center justify-center gap-[10px] text-black active:border-[2px] border-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#65d8f7] active:bg-slate-700 active:text-white'}`}>
            {loading ? <Loading/> : 'Add Product'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Add