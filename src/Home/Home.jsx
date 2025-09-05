import React from 'react'
import heroImg from '../assets/avataaars.svg'
import styles from './Home.module.css'
import SharedComponent from '../SharedComponent/SharedComponent'

export default function Home() {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center p-5 text-white mt-2'>

      <img src={heroImg} alt="" className={`${styles['w-250']} mb-5`}/>
      <h1 className='my-2 fw-bold'>START FRAMEWORK</h1>   
      <SharedComponent bgColor= {'#fff'} color={'#fff'}/>
      <p>Graphic Artist - Web Designer - Illustrator</p>     
    </div>
  )
}
