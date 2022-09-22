import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'


function Navbar() {
  const [navBtn, setNavBtn] = useState(false)

  function handleNavClick() {
    setNavBtn((prev) => {
      return !prev
    })
  }
  return (

    <div id='container'>
      <nav className='navbar'>
        <div className='logo'>Naythan</div>
        <ul className={navBtn ?'nav-mobile': "nav"}>
          <li><a href='#aboutme'>About Me</a></li>
          <li><a href='#skills'>My Skills</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#contact'>Contact Me</a></li>
        </ul>
        <button onClick={handleNavClick}>{navBtn ? <GrClose /> : <FaBars />}</button>
      </nav>
    </div>

  )

}


export default Navbar