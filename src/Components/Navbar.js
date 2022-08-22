import React from 'react'
import './Style.css'


function Navbar() {
  return (
    <div>
    <div id='container'>
    <nav className='navbar'>
    <div className='logo'>Nathaniel Essien</div>
    <div className='hambugger'>
    <i class="fa-solid fa-bars" id='bars'></i>
    <i class="fa-solid fa-x" id='X'></i>
    <ul className='list22'>
        <li className='lis'>About Me</li>
        <li className='lis'>My Skills</li>
        <li className='lis'>Experience</li>
        <li className='lis'>Contact Me</li>
    </ul>
    </div>
    <ul className='lists'>
        <li className='li'>About Me</li>
        <li className='li'>My Skills</li>
        <li className='li'>Experience</li>
        <li className='li'>Contact Me</li>
    </ul>
    </nav>
    </div>
    </div>
  )

}
  

export default Navbar