import React from 'react'
import './allOrders.css'
import CardAdmin from '../../components/CardAdmin/CardAdmin'

export default function AllOrders() {
  return (
    <div className='container-card-user'>
    <div className='title-orders'>
        <h1>ALL ORDERS</h1>
    </div>
    <div className='container-cards'>
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
    </div>
</div>
  )
}
