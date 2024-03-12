import React, { useState } from 'react'
import upcoming from '../../assests/upcoming.jpg'
export default function Playlist() {
  const [getWidth,setWidth]=useState(window.innerWidth-30)
  const [getHeight,setHeight]=useState(window.innerHeight-25)

  return (
    <>
      <img src={upcoming}
        className='upcoming'
        style={{width:getWidth,height:getHeight}}
      />      
    </>
  )
}
