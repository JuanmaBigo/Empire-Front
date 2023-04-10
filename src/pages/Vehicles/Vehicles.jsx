import React from 'react'
import './vehicles.css'

export default function Vehicles() {
  return (
    <div className='contenedor-vehiclespage'>
        <div className='titles-vehicles-page'>
          <img className='empire-vehiclespage-img' src='./image/title-empire-vehicles.png' alt='title vehicle' />
        </div>
        <div className='section-btn-vehicles'>
          {/*     <Anchor to='/form-contact'> */}
          <button className='btn-vehiclespage'>SHOW ALL</button>
          {/*  </Anchor> */}
        </div>
      </div>
  )
}
