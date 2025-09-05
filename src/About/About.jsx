import React from 'react'
import SharedComponent from '../SharedComponent/SharedComponent'
import styles from './About.module.css'
export default function About() {
  return (
    
    <div className={` text-white ${styles.sectionPadding}`}>
      <h1 className='text-center'>ABOUT COMPONENT</h1>
      <SharedComponent bgColor= {'#fff'} color={'#fff'}/>
      <div className="container">
        <div className="row">
        <div className="col-md-6 px-md-5 mb-5 mb-md-0"><p className='p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        <div className="col-md-6 px-md-5 mb-5 mb-md-0"><p className='p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>

        </div>
        </div>
      
    </div>
  )
}
