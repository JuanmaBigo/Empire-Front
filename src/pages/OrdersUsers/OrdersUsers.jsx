import React, { useState, useEffect } from 'react'
import './ordersUsers.css'
import axios from 'axios'
import CardUser from '../../components/CardUser/CardUser'
import apiUrl from '../../configHost'

export default function OrdersUsers() {
  const [orders, setOrders] = useState([])
  const url = `${apiUrl}orders`;
  const token = localStorage.getItem('token');
  const headers = { headers: { Authorization: `Bearer ${token}` } };

useEffect (
  () => {
    axios.get(url, headers)
    .then(res => setOrders(res.data.orders))
  }, []
)
console.log(orders)
  return (
    <div className='container-card-user'>
        <div className='title-orders'>
            <h1>MY ORDERS</h1>
        </div>
        <div className='container-cards'>
            <CardUser orders={orders} />
        </div>
    </div>
  )
}
