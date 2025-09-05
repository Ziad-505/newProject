import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {

  const [isScrolled, setisScrolled] = useState(false)
  const handleScroll = () => {
    if(window.scrollY>0){
      setisScrolled(true)
    }
    else{
      setisScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-navbar ${styles['bg-navbar']} navbar-dark`} style={{padding:isScrolled==true? '15px': '30px', transition: '0.3s all'}}>
  <div className="container">
    <Link className="navbar-brand fs-2 fw-bolder" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    
    </>
  )
}
