import React from 'react'
import './service.css'
import { Link as Anchor } from 'react-router-dom'


export default function Service() {
  return (
    <>
      <div className='contenedor-servicepage'>
        <div className='titles-service-page'>
          <img className='empire-servicepage-img' src='./image/contact-us-text.png' alt='title museum' />
        </div>
        <div className='section-btn-service'>
          <Anchor to='contact' className='btn-servicepage'>CONTACT US</Anchor>
        </div>
      </div>

    </>
  )
}
