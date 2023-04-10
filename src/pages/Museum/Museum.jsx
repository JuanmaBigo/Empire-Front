import React from 'react'
import './museum.css'
import { Link as Anchor } from 'react-router-dom'


export default function Museum() {
  return (
    <>
      <div className='contenedor-museumpage'>
        <div className='titles-museum-page'>
          <p className='artCultureText'>ART & CULTURE</p>
          <img className='empire-museumpage-img' src='./image/titleMuseum.png' alt='title museum' />
        </div>
        <div className='section-btn-museumtour'>
          <Anchor to='museum-tour' className='btn-museumpage'>VIRTUAL TOUR</Anchor>
        </div>

      </div>

    </>
  )
}
