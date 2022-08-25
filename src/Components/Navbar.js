import React from 'react'
import './Style.css'


function Navbar() {
  const firstClick = () =>{
    let bars = document.querySelector('#bars')
    let cancel = document.querySelector('#X')
    let list =  document.querySelector('.list22')
    list.style.display = 'block'
    bars.style.display = 'none'
    cancel.style.display = 'block'
  }
  const secondClick = () =>{
    let cancel = document.querySelector('#X')
    let bars = document.querySelector('#bars')
    let list =  document.querySelector('.list22')
    list.style.display = 'none'
    bars.style.display = 'block'
    cancel.style.display = 'none'
  }
  return (
    <div>
    <div id='container'>
    <nav className='navbar'>
    <div className='logo'>Nathaniel Essien</div>
    <div className='hambugger'>
    <i className="fa-solid fa-bars" id='bars' onClick={firstClick}></i>
    <i className="fa-solid fa-x" id='X' onClick={secondClick}></i>  
    <ul className='list22'>
    <li className='lis'><a href='#aboutme'>About Me</a></li>
        <li className='lis'><a href='#skills'>My Skills</a></li>
        <li className='lis'><a href='experience'>Experience</a></li>
        <li className='lis'><a href='contact'>Contact Me</a></li>
    </ul>
    </div>
    <ul className='lists'>
    <li className='li'><a href='#aboutme'>About Me</a></li>
        <li className='li'><a href='#skills'>My Skills</a></li>
        <li className='li'><a href='#experience'>Experience</a></li>
        <li className='li'><a href='#contact'>Contact Me</a></li>
    </ul>
    </nav>
    </div>
    </div>
  )

}
  

export default Navbar