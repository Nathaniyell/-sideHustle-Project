import React, { useEffect } from 'react'
import { FaCode } from 'react-icons/fa'
import { FaPeopleArrows } from 'react-icons/fa'
import Aos from 'aos'
import "aos/dist/aos.css"

const skillsDetails = [
    {
        id: 'e2',
        logo: <FaCode />,
        header: "Front-End Web Development",
        text: "Proficiency in HTML, CSS, Bootstrap, JavaScript, jQuery and ReactJs for rapid creation of responsive webpages while adding functionalities where necessary.",
        value: "zoom-in-right"
    },
    {
        id: 'e4',
        logo: <FaPeopleArrows />,
        header: "Teamwork",
        text: "Adept at effective communication, multitasking, attention to details and other skills which are vital for achieving outstanding results during collaborations.",
        value: "zoom-in-left"
    }
]



const SkillsCard = ({ icon, title, details, aos }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='card1' data-aos={aos}>
            <div className='icons'>{icon}</div>
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    )
}

const skillElements = skillsDetails.map((elem) => {
    return (
        <SkillsCard
            key={elem.id}
            icon={elem.logo}
            title={elem.header}
            details={elem.text}
            aos={elem.value}
        />
    )
})

export default skillElements