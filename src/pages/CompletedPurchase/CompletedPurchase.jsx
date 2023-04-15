import React from 'react'
import './completedPurchase.css'
import img from '../../images/Group 41.png'

export default function CompletedPurchase
() {
  return (
    <div className='container-completed'>
        <div>
            <img src={img} alt="logo" />
        </div>
        <div>
            <h2>Your payment was made, an advisor will contact you shortly.</h2>
        </div>
    </div>
  )
}
