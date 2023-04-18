import React, { useEffect, useState } from 'react'
import {toast, Toaster } from 'react-hot-toast';
import './carrito.css'
import axios from 'axios'
import Card from '../../components/Card/Card'
import apiUrl from '../../configHost'

export default function Cart() {
  const [data, setData] = useState()
  const [total, setTotal] = useState()
  let url = `${apiUrl}items`
  let urlP = `${apiUrl}payments`
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  useEffect(
    () => {
      axios.get(url, headers)
            .then(response => {setData(response.data.item)
            setTotal(response.data.total)
            })
    }, []
  )
  
  if (!data) {
    return <p>Cargando...</p>
  }

  const handleClick = async () => {
    let description = data.forEach(element => element.car_id.name)

    let pay = {
      title: "Compra/Reservacion",
      description,
      image: "https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg",
      price: total
    };
  
    try {
      const response = await axios.post(urlP, pay, headers);
      window.location.href = response.data.response.body.init_point;
      console.log(response)
      toast.success('Lo redirigiremos a mercadopago' )
    } catch (error) {
      if (error.response) {
        if (typeof error.response.data.message === "string") {
          toast.error("Something went wrong", {
            description: error.response.data.message,
          });
        } else {
          error.response.data.message.forEach((err) =>
            toast.error({ description: err })
          );
        }
      } else {
        toast.error({ description: error.message });
      }
    }
  };

// console.log(data)
  return (  
    <div className='contain-carrito'>
      <div className='contain-card'>
    {data && data.map((item, index) => (
        <Card key={index} i={item} />
      ))}
        </div>
        <div className='div-payment'>
          <div className='contain-pay'>
            <div className='div-pay'>
              <h3>TOTAL RESERVATION</h3>
              <h3>{total}</h3>
            </div>
          </div>
          <button className='btn-pay' onClick={handleClick}> MAKE PAYMENT</button>
        </div>
        <Toaster position="top-right" reverseOrder={false}/>
    </div>
  )
}
