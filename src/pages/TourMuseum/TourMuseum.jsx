import React from 'react';
import './tourMuseum.css';

export default function MuseumTour() {
  return (
    <>
      <div className='museumtour-section'>
        <video className="video-museumtour" loop muted autoPlay>
          <source src="../../video/tour.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}