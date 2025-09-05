import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css'
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {

  let location = useLocation()

  let bgComponents = {
    '/':'#1ABC9C',
    '/about':'#1ABC9C',
    '/portfolio':'#fff',
    '/contact':'#fff',
  }
  let bgColors = bgComponents[location.pathname]
  return (
    <div className='vh-100 d-flex flex-column justify-content-between' style={{backgroundColor:bgColors}}>
    <Navbar/>
    <div className={`flex-grow-1 ${styles['padding-section']}`}>
    <Outlet />
    </div>
    

    <Footer/>
    </div>
  )
}
