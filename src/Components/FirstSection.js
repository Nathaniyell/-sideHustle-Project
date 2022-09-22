
import React from 'react'
import './Style.css'
import image from './neww.png'
import 'animate.css'

function FirstSection() {
  return (
    <div>
      <div className='wrapper'>
        <div className='div1 animate__animated animate__slideInLeft' >
            <p>hi there...</p>
            <h2>i am nathaniel essien</h2>
            <h1>a diligent frontend developer</h1>

        </div>
        <div className='div2 animate__animated animate__slideInRight'>
            <img src={image} alt='nathanielEssien' />
        </div>
      </div>
    </div>
  )
}

export default FirstSection