/* import React from 'react';
import './tourMuseum.css';

export default function MuseumTour() {
  return (
    <>
      <div className='museumtour-section'>
        <video className="video-museumtour" loop muted autoPlay>
          <source src="https://youtu.be/rlbjVAr5SYI?t=8" type="video/mp4" />
        </video>
      </div>
    </>
  )
} */
import React from 'react';
import ReactPlayer from 'react-player';
import './tourMuseum.css';

export default function MuseumTour() {
  return (
    <div className='museumtour-section'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=rlbjVAr5SYI&t=8s'
        className='video-museumtour'
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
    </div>
  )
}
