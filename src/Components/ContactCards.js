import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { IconContext } from 'react-icons'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';




const cardDetails = [
    {
        id: 'm1',
        icon: <MdMail />,
        title: 'Email',
        text: 'thaniessy@gmail.com',
        value: 'fade-up'
    },
    {
        id: 'p1',
        icon: <FaPhone />,
        title: 'Phone',
        text: '+2349034940576',
        value: 'zoom-in'
    },
    {
        id: 'l1',
        icon: <FaLinkedin />,
        title: 'Linkedin',
        text: 'Nathaniel Essien',
        value: 'fade-down'
    },
    {
        id: 'g1',
        icon: <FaGithub />,
        title: 'Github',
        text: 'Nathaniel Essien',
        value: 'fade-up'
    },
    {
        id: 't1',
        icon: <FaTwitter />,
        title: 'Twitter',
        text: '@_kvngNath',
        value: 'zoom-in'
    }, 
    {
        id: 'w1',
        icon: <FaWhatsapp />,
        title: 'WhatsApp',
        text: '+2349034940576',
        value: 'fade-down'
    },
]

const ContactCards = ({ icons, name, details, aos }) => {
    useEffect(()=>{
        Aos.init({ duration: 2000 })
      }, [])
    return (

        <div className='c1' data-aos={aos}>
            <IconContext.Provider value={
                {
                    size: '1.3em',
                    color: '#9932cc'
                }
            }>
                {icons}
            </IconContext.Provider>

            <h4>{name}</h4>
            <p>{details}</p>

        </div>
    )
}

const cardElements = cardDetails.map((card) => {
    return (
        <ContactCards
            key={card.id}
            icons={card.icon}
            name={card.title}
            details={card.text}
            aos={card.value}
        />
    )

})

export default cardElements