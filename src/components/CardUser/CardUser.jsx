import React from 'react'
import './cardUser.css'
import Image from '../Image/Image'


export default function CardUser({orders}) {
  console.log(orders)
  return (
    <>
            {
              orders?.map((res, i) => (
                <div key={i} className='orders-section'>
                <h2>Order {i}</h2>
                  <div className='card'>
                    <div className='flex col'>
                      <span>Payment ID: <b>{res.payment_id}</b></span>
                      <span>Status: <b>{res.status}</b></span>
                    </div>
                  {res?.products.map((res, i) => 
                  (<div className='flex col'>
                    <img className="image-vehicle" src={res.rim_id.photo} alt="vehicle" />
                      <h3 key={i}>Vehicle: {res.car_id.name}</h3>
                      <p>Color: {res.color_id.name}</p>
                      <p>Rim: {res.rim_id.name}</p>
                  </div>
                  ))}
                  <div className='flex col'>
                    <span>Total:</span>
                    <h4>${res.totalPrice}</h4>
                  </div>
                </div>
              </div>
              ))
            }
    </>
  )
}
