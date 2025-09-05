import React from 'react'
import { FaStar } from "react-icons/fa";
export default function SharedComponent({bgColor, color}) {
  return (
    
    <div className='d-flex justify-content-center align-items-center gap-3 my-2'>
        <div style={{backgroundColor:bgColor, height: '4px', width:'100px'}}></div>
        <span><FaStar color={color} fontSize={'20px'}/></span>
        <div style={{backgroundColor:bgColor, height: '4px', width:'100px'}}></div>

    </div>
  )
}
