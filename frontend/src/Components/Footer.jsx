import React from 'react'
import logo from "../assets/vcart logo.png"

function Footer() {
  return (
    <div className='w-full h-auto mb-[77px] md:mb-0'>

      {/* Main Footer */}
      <div className='w-full h-auto bg-[#dbfcfcec] flex flex-wrap items-start justify-between md:px-[50px] px-[10px] py-[20px] gap-[20px]'>

        {/* Logo Section */}
        <div className='md:w-[30%] w-full flex flex-col gap-[8px]'>
          <div className='flex items-center gap-[5px]'>
            <img
              src={logo}
              alt="Zoom Store Logo"
              className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'
            />
            <p className='text-[19px] md:text-[20px] text-black'>
              Zoom-store
            </p>
          </div>

          <p className='text-[14px] text-[#1e2223] hidden md:block'>
            Zoom-store is your all-in-one online shopping destination,
            offering top-quality products, unbeatable deals, and fast
            delivery — all backed by trusted service designed to make
            your life easier every day.
          </p>

          <p className='text-[15px] text-[#1e2223] md:hidden'>
            Fast. Easy. Reliable. Zoom-store shopping
          </p>
        </div>

        {/* Company Section */}
        <div className='md:w-[25%] w-[45%] flex flex-col items-start'>
          <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans mb-[8px]'>
            COMPANY
          </p>

          <ul className='space-y-[4px]'>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>Home</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>About us</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>Delivery</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className='md:w-[25%] w-[45%] flex flex-col items-start'>
          <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans mb-[8px]'>
            GET IN TOUCH
          </p>

          <ul className='space-y-[4px]'>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>+92-3467513143</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>contact@zoomstore.com</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>+1-123-456-7890</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>admin@zoomstore.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='w-full text-center text-[14px] text-[#1e2223] py-[10px] bg-[#dbfcfcec] border-t border-gray-300'>
        Copyright 2025 @Zoom-Store.com - All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
