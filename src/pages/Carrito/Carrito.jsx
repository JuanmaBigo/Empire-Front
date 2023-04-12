import React from 'react'
import './carrito.css'
import Card from '../../components/Card/Card'

export default function 
() {
  return (
    <div className='contain-carrito'>
      <div className='contain-card'>
        <Card />
        <Card />
        <Card />
        </div>
        <div className='div-payment'>
          <div className='contain-pay'>
            <h3>RESERVATION</h3>
            <div className='div-pay'>
              <h3>TOTAL</h3>
              <h3>$75.000</h3>
            </div>
          </div>
          <button className='btn-pay'>MAKE PAYMENT</button>
        </div>
    </div>
  )
}
