import React, { useState, useEffect } from 'react';
import {toast, Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './completedPurchase.css';
import img from '../../images/Group 41.png';
import apiUrl from '../../configHost';

export default function CompletedPurchase() {
  const location = useLocation();
  let navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search);
  const [purchaseAmount, setPurchaseAmount] = useState();
  const [userId, setUserId] = useState({});
  let status = searchParams.get('status')
  let paymentId = searchParams.get('payment_id')
  let paymentMethod = searchParams.get('payment_type')
  const url = `${apiUrl}orders`;
  const urlI = `${apiUrl}items`;
  const token = localStorage.getItem('token');
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  async function getData () {
    await axios.get(urlI, headers)
               .then(res => {
                setPurchaseAmount(res.data.total)
                setUserId(res.data.item[0].user_id)
            }).catch((err) => console.log(err))

    if (status === 'approved') {
   
      const token = localStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const data = {
        user_id: userId,
        payment_id: paymentId,
        totalPrice: purchaseAmount,
        status: "pending",
        payment_method: paymentMethod,
      }; 
console.log(userId)
// console.log(data)
      await axios.post(url, data, headers).then(res => res).catch(err =>console.log(err))
      toast.success("Order was succesfully created")
      setTimeout(() => {
        navigate("/orders")
      }, 2000);
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
      <Toaster position="top-right" reverseOrder={false}/>
    </div>
  );
}
