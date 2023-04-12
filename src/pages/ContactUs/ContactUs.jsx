import React from 'react'
import './contactUs.css'
import img from '../../images/titlecontact.png';


export default function ContactUs() {
  return (
    <div className="bg-contactus">
        <div className="bg-title-contactus">
            <img src={img} alt="contact" />
        </div>
        <div className='div-text-contact'>
            <h1>Thank you for contacting, shortly, an advisor will contact you.</h1>
        </div>
    </div>
  )
}
