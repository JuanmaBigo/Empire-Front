import React from 'react'
import './card.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Image from '../Image/Image'
import imgclose from '../../images/close2.png'
import apiUrl from '../../configHost'

export default function Card({ i }) {
  const [data, setData] = useState([])

  let url = `${apiUrl}items`
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  useEffect(
    () => {
      axios.get(url, headers)
        .then(response => setData(response?.data?.item))
    }, []
  )


  const handleClose = async () => {

    let url = `${apiUrl}items/${i._id}`
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    console.log(url)
    try {
      await axios.put(url, headers)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }

  }

  return (
    < >
      <div className='cards-carrito'>
        <div className='div-img'>
          <Image className='img' src={i.rim_id.photo} />
        </div>
        <div className='container-card'>
          <div className='div-card'>
            <h2>RESUME</h2>
            <button className='btn-close' onClick={handleClose}><img className='close' src={imgclose} alt="close" /></button>
          </div>
          <div className='div-card'>
            <h3>BASE <p>{i.car_id.name}</p></h3>
            <h3>{(i.car_id.price).toLocaleString("es-VE")}</h3>
          </div>
          <div className='div-card'>
            <h3>COLOR <p>{i.color_id.name}</p></h3>
            <h3>{(i.color_id?.price_color).toLocaleString("es-VE")}</h3>
          </div>
          <div className='div-card'>
            <h3>RIM SELECTION <p>{i.rim_id.name}</p></h3>
            <h3>{(i.rim_id.price_rim).toLocaleString("es-VE")}</h3>
          </div>
          <div className='div-card'>
            <h3>TOTAL </h3>
            <h3>{(i.car_id.price + i.color_id.price_color + i.rim_id.price_rim).toLocaleString("es-VE")}</h3>
          </div>
          <div className='div-card'>
            <h3>RESERVATION </h3>
            <h3>{(i.car_id.reservePrice + i.color_id.price_color + i.rim_id.price_rim).toLocaleString("es-VE")}</h3>
          </div>
        </div>
      </div>
    </>
  )
}
