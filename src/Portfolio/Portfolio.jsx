import React, { useState } from 'react'
import SharedComponent from '../SharedComponent/SharedComponent'
import { FaPlus } from "react-icons/fa6";
import styles from './Portfolio.module.css'

export default function Portfolio() {

  const [openModel, setopenModel] = useState(false)
  const [clickedImg, setclickedImg] = useState(null)

  const images = Object.values(import.meta.glob('../assets/port/*.png', {
    as:'url',
    eager:true,
  }))

  const imgWithId = images.map((imgSrc) => {
    return {id: crypto.randomUUID(), src:imgSrc}
  })
  return (
  <>

    <div className='py-5'>
      <h1 className='text-center fw-semibold'>PORTFOLIO COMPONENT</h1>
      <SharedComponent bgColor= {'#2C3E50'} color={'#2C3E50'}/>
      <div className="container my-5">
        <div className="row gy-4">
          {imgWithId.map((item) =>(
            <div className="col-md-4 g-5">
              <div className={`position-relative ${styles['img-wrapper']}`} onClick={()=>{setopenModel(true); setclickedImg(item.src)}}>
              <img src={item.src} alt="" className='w-100 rounded-3'/>
              <div className={`position-absolute start-0 end-0 bottom-0 top-0 ${styles['img-layer']}`}>
              <FaPlus color='#fff' fontSize={'50px'}/>

              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {openModel&&<div className={`${styles['model-design']} d-flex justify-content-center align-items-center`} onClick={()=> setopenModel(false)}>
      <img src={clickedImg} alt="" className={`${styles['w-500']}`} onClick={(e)=>e.stopPropagation()}/>
      </div>}
    
    
    
    </>
  )
}
