import React from 'react'
import "./details.css"
import { Link as Anchor } from 'react-router-dom'
import motor from "../../images/motor.png"
import top from "../../images/topvelocidad.png"
import aceleracion from "../../images/aceleracion.png"
import auto from "../../images/detailsImage.png"







export default function Details(){
  return(
    <>
    <div className='firstDetails'>
      <div className='mainDetails'>
        <img src={auto} alt="" className='photoDetails' />
        <h1 className='detailsTitle'>AAAAAAAAA</h1>
        <Anchor to="#" className="Detailsbtn"> Build your Car </Anchor>
      </div>
      <div className='speedDetails'>
        <div className='carDetails'> 
        <img src={motor} alt=""/>
        <h3>Potencia:</h3> 
        </div>
        <div className='carDetails'>
          <img src={top} alt=""/>
          <h3>Top Speed:</h3>
          </div>
        <div className='carDetails'>
          <img src={aceleracion} alt=""/>
          <h3>0-100Km/h:</h3>
          </div>
      </div>
    </div>
    <div className='' >

    </div>

    </>
  )

}