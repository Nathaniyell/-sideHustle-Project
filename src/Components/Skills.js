import React from 'react'

import './Style.css'


function Skills() {
  return (
    <div>
        <div className='skills' id='skills'>
            <h1>My <span>Skills</span></h1>    
            <div className='cards'>
            <div className='card1'>
                <i class="fa-solid fa-code"></i>
                <h1>Front-End Web Development</h1>
                <p>Proficiency in HTML, CSS, Bootstrap, JavaScript and jQuery for rapid creation of responsive webpages while adding functionalities where necessary.</p>
            </div>
            <div className='card2'>
            <i class="fa-solid fa-people-arrows"></i>
                <h1>Teamwork</h1>
                <p>Proficient in skills that are vital to the growth of the team especially multitasking and attention to detail.</p>
            </div>
            </div>
        </div>
        </div>

  )
}

export default Skills