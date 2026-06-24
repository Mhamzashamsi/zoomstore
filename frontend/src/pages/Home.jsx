import React, { useEffect, useState } from 'react'
import Background from '../Components/Background'
import Hero from '../Components/Hero'
import Product from '../pages/product'
import Ourpolicy from '../Components/ourpolicy'
import Newletter from '../Components/Newletter'
import Footer from '../Components/Footer'

const Home = () => {
  const herodata = [
    { text1: "Discover the Best Of Bold Fashion", text2: "Limited Time Only" },
    { text1: "30% off limited offer", text2: "Style That Speaks" },
    { text1: "Explore our best collection", text2: "Shop Now" },
    { text1: "Choose your perfect fashion fit", text2: "Now on sale" },
  ]

  const [herocount, setherocount] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setherocount(prevcount => (prevcount === 3 ? 0 : prevcount + 1))
    }, 3000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='overflow-x-hidden relative top-[70px]'>

      {/* Hero Section */}
      <div className='relative w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
        <Background herocount={herocount} />
        <Hero
          herocount={herocount}
          setherocount={setherocount}
          herodata={herodata[herocount]}
        />
      </div>

      {/* Product Section */}
      <Product />
<Ourpolicy/>
  <Newletter/>
  <Footer/>
    </div>
  )
}

export default Home