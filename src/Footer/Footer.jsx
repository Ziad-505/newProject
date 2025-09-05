import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className={`footer ${styles['bg-footer']} text-white`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h4>LOCATION</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>AROUND THE WEB</h4>
            <ul className='list-unstyled d-flex justify-content-center align-items-center gap-3'>
              <li className={`${styles['rounded-icon']}`}><FaFacebook fontSize={'20px'}/></li>
              <li className={`${styles['rounded-icon']}`}><FaTwitter  fontSize={'20px'}/></li>
              <li className={`${styles['rounded-icon']}`}><FaLinkedinIn fontSize={'20px'}/></li>
              <li className={`${styles['rounded-icon']}`}><FaGlobe fontSize={'20px'}/></li>

          
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h4>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>

      <div className={`${styles['bg-lower-footer']} text-center text-white py-3`}>
      <p>Copyright © Your Website 2021</p>
    </div>
      </div>


    

    </>
  )
}
