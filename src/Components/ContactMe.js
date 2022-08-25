import React from 'react'
import './Style.css'

function ContactMe() {
  return (
    <div>
        <footer id='contact'>
       
            <div>
               <h1>Contact <span>Me</span></h1>
            </div>
            <div className='contact' data-aos="fade-down" data-aos-duration='2000'>
                <div className='c1'>
                <i class="fa-solid fa-envelope"></i>
                <h4>Email</h4>
                <p className='mail'>thaniessy@gmail.com</p>
                </div>
                <div className='c1'>
                <i class="fas fa-phone-alt"></i>
                <h4>Phone</h4>
                <p>+2349034940576</p>
                </div>
                <div className='c1'>
                <i class="fa-brands fa-linkedin"></i>
                <h4>Linkedin</h4>
                <p>Nathaniel Essien</p>
                </div>
                <div className='c1'>
                <i class="fa-brands fa-linkedin"></i>
                <h4>Github</h4>
                <p>Nathaniel Essien</p>
                </div>
                <div className='c1'>
                <i class="fa-brands fa-twitter"></i>
                <h4>Twitter</h4>
                <p>@_kvngNath</p>
                </div>
                <div className='c1'>
                <i class="fa-brands fa-whatsapp"></i>
                <h4>WhatsApp</h4>
                <p>+2349034940576</p>
                </div>
            </div>
            <div className='lastly'>Designed and Built by <span>Nathaniel Essien</span></div>
        </footer>
    </div>
  )
}

export default ContactMe