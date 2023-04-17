import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './completedPurchase.css'
import img from '../../images/Group 41.png'
import apiUrl from '../../configHost'

export default function CompletedPurchase() {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [purchaseAmount, setPurchaseAmount] = useState()
  const [itemId, setItemId] = useState()
  const paymentId = searchParams.get('payment_id');
  const status = searchParams.get('status');
  const paymentMethod = searchParams.get('payment_type');
  let url = `${apiUrl}orders`
  let url1 = `${apiUrl}items`
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  useEffect(
    () => {
      axios.get(url1, headers)
            .then(response => {setPurchaseAmount(response.data)
              setItemId(response.data._id)
            })
    }, [])

    console.log(purchaseAmount)
    console.log(itemId)

  let data = {
    payment_id:  paymentId,
    // products:  itemId,
    totalPrice:  purchaseAmount,
    status:  status,
    payment_method: paymentMethod,
  }

  if (status == "approved") {
    axios.post(url, data, headers)
         .then(res => console.log(res))
  }

  console.log(paymentId)
  console.log(status)


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
