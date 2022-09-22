import React from 'react'
import eduElements from './EduCard'
import './Style.css'


function EducationalExp() {
    return (
        <div>
            <div className='eduEx' id='experience'>
                <h1>Eductional <span>Experience</span></h1>
                <div className='cards2'>
                    {eduElements}                    
                </div>
            </div>
        </div>
    )
}

export default EducationalExp