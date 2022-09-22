import React from 'react'
import cardElements from './ContactCards'
import './Style.css'

function ContactMe() {
  return (
    <footer id='contact'>
      <div>
        <h1>Contact <span>Me</span></h1>
      </div>
      
      <div className='contact'>
        {cardElements}
      </div>
      <div className='lastly'>Designed and Built by <span>Nathaniel Essien</span></div>
    </footer>
  )
}

export default ContactMe