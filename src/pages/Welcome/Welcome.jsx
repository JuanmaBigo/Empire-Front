import React from 'react';
import './welcome.css';
import { Link as Anchor } from 'react-router-dom'

export default function Welcome() {

  return (
    <div className='home-section'>
      <div className="section-logo-home">
        <img className="logo-home" src="./image/logo.png" alt="Logo" />
      </div>
      <section>
        <h1 className='title-home'>EMPIRE</h1>
        <Anchor to='/home' className='btn-home'>LIVE YOUR EXPERIENCE</Anchor>
      </section>
      <video className="video-home" loop muted autoPlay>
        <source src="../../video/autos.mp4" type="video/mp4" />
      </video>
    </div>
  )
}