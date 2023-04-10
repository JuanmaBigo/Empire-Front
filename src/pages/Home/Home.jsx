import React from 'react'
import './home.css'
import { Link as Anchor } from 'react-router-dom'


export default function Home() {
  return (
    <div >
      <div className='contenedor-principalpage'>
        <Anchor to='/vehicles' className='contenedor-img-principalpage-1'>
          <h1 className='title-principal'>VEHICLES</h1>
        </Anchor>

        <Anchor to='/art&culture' className='contenedor-img-principalpage-2'>
          <h1 className='title-principal'>ART & CULTURE</h1>
        </Anchor>

        <Anchor to='/services' className='contenedor-img-principalpage-3'>
          <h1 className='title-principal'>SERVICES</h1>
        </Anchor>


      </div>
    </div>
  )
}
