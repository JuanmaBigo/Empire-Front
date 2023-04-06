import React from 'react'
import './principal.css'
import { Link as Anchor } from 'react-router-dom'

//en cada anchor, poner ruta correspondiente a la seccion 

export default function Principal() {
  return (
    <div >
        <div className='contenedor-principalpage'>
            {/* <Anchor to='/vehicles'> */}
            <section className='contenedor-img-principalpage-1'>
                <h1 className='title-principal'>Vehicles</h1>
            </section>
          {/*   </Anchor>
            <Anchor to='/artCulture'> */}
            <section className='contenedor-img-principalpage-2'>
                <h1 className='title-principal'>Art & culture</h1>
            </section>
          {/*   </Anchor>
           <Anchor to='/services'> */}
           <section className='contenedor-img-principalpage-3'>
                <h1 className='title-principal'>Services</h1>
            </section>
          {/*  </Anchor> */}
         
        </div>
    </div>
  )
}
