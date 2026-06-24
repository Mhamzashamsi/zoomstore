import React from 'react'
import back1 from "../assets/back1.png.jpg"
import back2 from "../assets/back2.png.jpg"
import back3 from "../assets/back3.png.jpg"
import back4 from "../assets/back4.png.jpg"

function Background({ herocount }) {
  const images = [back1, back2, back3, back4];

  return (
    <img
      src={images[herocount]}
      alt=""
      className='absolute inset-0 w-full h-full object-cover object-top z-[0] '
    />
  )
}

export default Background