import React from 'react'
import './vehicles.css'

export default function Vehicles() {
  return (
    <div className='contenedor-servicepage'>
        <div className='titles-service-page'>
          <img className='empire-servicepage-img' src='./image/title-empire-vehicles.png' alt='title vehicle' />
        </div>
        <div className='section-btn-service'>
          {/*     <Anchor to='/form-contact'> */}
          <button className='btn-servicepage'>SHOW ALL</button>
          {/*  </Anchor> */}
        </div>
      </div>
  )
}
