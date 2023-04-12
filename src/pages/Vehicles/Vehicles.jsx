import React from 'react'
import './vehicles.css'
import { Link as Anchor } from 'react-router-dom'

export default function Vehicles() {
  return (
    <div className='contenedor-vehiclespage'>
        <div className='titles-vehicles-page'>
          <img className='empire-vehiclespage-img' src='./image/title-empire-vehicles.png' alt='title vehicle' />
        </div>
        <div className='section-btn-vehicles'>
         <Anchor to='/select-model'> 
          <button className='btn-vehiclespage'>SHOW ALL</button>
         </Anchor> 
        </div>
      </div>
  )
}
