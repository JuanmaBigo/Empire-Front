import React, { useEffect, useState } from 'react'
import { ToastContainer, toast, Toaster } from 'react-toastify'
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

  const handleClick = async () => {
    let pay = {
      title: "hola package",
      description: "carro lindo",
      price: 1
    };
  
    try {
      const response = await axios.post(urlP, pay, headers);
      window.location.href = response.data.response.body.init_point;
      console.log(response)
      toast.success('Lo redirigiremos a mercadopago', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",})
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
  
console.log(data)
  return (  
    <div className='contain-carrito'>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

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
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  )
}
