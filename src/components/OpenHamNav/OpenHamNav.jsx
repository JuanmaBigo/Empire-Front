import React from 'react'
import './openHamNav.css'
import NavBody from '../NavBody/NavBody'


export default function OpenHamNav({handleRender}) {
  return (
    <nav className='open-nav' id='nav'>
        <NavBody handleRender={handleRender}/>
    </nav>
  )
}
