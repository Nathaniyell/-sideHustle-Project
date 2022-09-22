import React from 'react'
import skillElements from './SkillsCard'

import './Style.css'


function Skills() {
    return (
        <div>
            <div className='skills' id='skills'>
                <h1>My <span>Skills</span></h1>
                <div className='cards'>
                    {skillElements}
                </div>
            </div>
        </div>

    )
}

export default Skills