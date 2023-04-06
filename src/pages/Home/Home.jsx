import React from 'react';
import './home.css';

export default function Home() {
  return (
    <>
      <div className='home-section'>
        <div className="section-logo-home">
          <img className="logo-home" src="./image/logo.png" alt="Logo" />
        </div>
        <section>
          <h1 className='title-home'>EMPIRE</h1>
          <button className='btn-home'>LIVE YOUR EXPERIENCE</button>
        </section>
        <video className="video-home" loop muted autoPlay>
          <source src="../../video/autos.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}