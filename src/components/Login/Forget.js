import React ,{useState} from 'react'
import upcoming from '../../assests/upcoming.jpg'
function Forget() {
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

export default Forget
