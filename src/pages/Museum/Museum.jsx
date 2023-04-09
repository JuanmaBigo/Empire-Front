import React from 'react'
import './museum.css'
//import { Link as Anchor } from 'react-router-dom'


export default function Museum() {
  return (
    <>
      <div className='contenedor-museumpage'>
        <div className='section-btn-museumtour'>
          {/*     <Anchor to='/museum-tour'> */}
          <button className='btn-museumpage'>VIRTUAL TOUR</button>
          {/*  </Anchor> */}
        </div>
        <div className='titles-museum-page'>
          <img className='artyculture-img' src='./image/art&culture.png' alt='title art&culture' />
          <img className='empire-museumpage-img' src='./image/titleMuseum.png' alt='title museum' />
        </div>

      </div>

    </>
  )
}
