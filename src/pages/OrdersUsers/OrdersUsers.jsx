import React, { useState, useEffect, useRef } from 'react'
import './ordersUsers.css'
import axios from 'axios'
import CardUser from '../../components/CardUser/CardUser'
import apiUrl from '../../configHost'

export default function OrdersUsers() {
  const [orders, setOrders] = useState([])
  const scrollRef = useRef(null);

  const url = `${apiUrl}orders`;
  const token = localStorage.getItem('token');
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const handleScrollToBottom = () => {
    // Hacer scroll suave hacia abajo
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }

useEffect (
  () => {
    axios.get(url, headers)
    .then(res => setOrders(res.data.orders))
  }, []
)
console.log(orders)
  return (
    <>
    <div className='container'>
            <h1 className='orders-title'>MY ORDERS</h1>
            <p>the place where you will find your purchase orders and their details</p>
            <button onClick={handleScrollToBottom}>View More</button>
    </div>
        <div className='container-cards' ref={scrollRef}>
            <CardUser orders={orders} />
        </div>
    </>
  )
}
