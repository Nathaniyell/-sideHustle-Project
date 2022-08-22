
import React from 'react'
import './Style.css'
import image from './nath.jpg'

function FirstSection() {
  return (
    <div>
      <div className='wrapper'>
        <div className='div1'>
            <p>hi there...</p>
            <h2>i am nathaniel essien</h2>
            <h1>a diligent frontend developer</h1>

        </div>
        <div className='div2'>
            <img src={image} alt='nathanielEssien' />
        </div>
      </div>
    </div>
  )
}

export default FirstSection