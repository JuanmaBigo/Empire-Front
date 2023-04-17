import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './completedPurchase.css';
import img from '../../images/Group 41.png';
import apiUrl from '../../configHost';

export default function CompletedPurchase() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [purchaseAmount, setPurchaseAmount] = useState();
  let status = searchParams.get('status')
  let paymentId = searchParams.get('payment_id')
  let paymentMethod = searchParams.get('payment_type')
  const url = `${apiUrl}orders`;
  const urlI = `${apiUrl}items`;
  const token = localStorage.getItem('token');
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  async function getData () {
    await axios.get(urlI, headers)
               .then(res => setPurchaseAmount(res.data.total))
    
    if (status === 'approved') {
   
      const token = localStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const data = {
        user_id: "64377af3968955ae96af8f9a",
        payment_id: paymentId,
        totalPrice: purchaseAmount,
        status: status,
        payment_method: paymentMethod,
      };

console.log(data)
      await axios.post(url, data, headers).then(res => console.log(res));
    }
  } 
  useEffect(() => {
      getData()
  }, [status, searchParams, paymentId, paymentMethod, purchaseAmount]);

  return (
    <div className='container-completed'>
      <div>
        <img src={img} alt='logo' />
      </div>
      <div>
        <h2>Your payment was made, an advisor will contact you shortly.</h2>
      </div>
    </div>
  );
}
