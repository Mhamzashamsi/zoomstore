import React from 'react'
import { FaCircle } from "react-icons/fa";

function Hero({ herodata, herocount, setherocount }) {
  return (
    <div className='absolute inset-0 z-[10]'>

      {/* Mobile — center overlay */}
      <div className='
        flex lg:hidden
        absolute inset-0
        bg-black/40
        flex-col items-center justify-center gap-[16px]
      '>
        <div className='text-[#88d9ee] text-[26px] font-semibold text-center leading-tight'>
          <p>{herodata.text1}</p>
          <p>{herodata.text2}</p>
        </div>
        <div className='flex items-center gap-[10px]'>
          {[0, 1, 2, 3].map((i) => (
            <FaCircle
              key={i}
              className={`w-[10px] cursor-pointer ${herocount === i ? "fill-orange-400" : "fill-white"}`}
              onClick={() => setherocount(i)}
            />
          ))}
        </div>
      </div>

      {/* Desktop — left text, right image */}
      <div className='
        hidden lg:flex
        absolute inset-0
      '>
        {/* Left 50% — text + circles */}
        <div className='
          w-[50%] h-full
          flex flex-col justify-center
          px-[10%]
          bg-gradient-to-r from-[#0c2025dd] to-[#0c202500]
        '>
          <div className='text-[#88d9ee] text-[50px] font-semibold leading-tight'>
            <p>{herodata.text1}</p>
            <p>{herodata.text2}</p>
          </div>
          <div className='flex items-center gap-[10px] mt-[40px]'>
            {[0, 1, 2, 3].map((i) => (
              <FaCircle
                key={i}
                className={`w-[14px] cursor-pointer ${herocount === i ? "fill-orange-400" : "fill-white"}`}
                onClick={() => setherocount(i)}
              />
            ))}
          </div>
        </div>

        {/* Right 50% — sirf image dikhti hai */}
        <div className='w-[50%] h-full'></div>
      </div>

    </div>
  )
}

export default Hero