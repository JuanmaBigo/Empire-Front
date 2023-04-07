import React from 'react'
import './museum.css'


export default function Museum() {
  return (
    <>
      <div className='contenedor-museumpage'>
        <div className='img-museum-page'>
          <img src='https://cdn.motor1.com/images/mgl/eoly7V/s4/lamborghini-museum-redesign-for-60th-anniversary.webp' alt='img-museumpage'/>
        </div>
        <div>
          <h1 className='title-museumpage'>ART & CULTURE</h1>
          <h3 className='text-museumpage'>TAKE A GUIDED TOUR IN OUR MUSEUM</h3>
          <button className='btn-museumpage'>VIRTUAL TOUR</button>
        </div>
      </div>
    </>
  )
}
