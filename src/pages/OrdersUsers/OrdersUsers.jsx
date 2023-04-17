import React from 'react'
import './ordersUsers.css'
import CardUser from '../../components/CardUser/CardUser'

export default function OrdersUsers
() {
  return (
    <div className='container-card-user'>
        <div className='title-orders'>
            <h1>MY ORDERS</h1>
        </div>
        <div className='container-cards'>
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
        </div>
    </div>
  )
}
