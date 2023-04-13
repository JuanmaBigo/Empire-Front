import React, { useEffect } from 'react'
import "./details.css"
import { Link as Anchor } from 'react-router-dom'
import motor from "../../images/motor.png"
import top from "../../images/topvelocidad.png"
import aceleracion from "../../images/aceleracion.png"
import auto from "../../images/detailsImage.png"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import carActions from "../../store/model/actions.js"

const { getOne } = carActions


const Details = () => {
  const data = useSelector((store) => store.model.car)

  console.log(data)
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    if (data) {
      dispatch(getOne({ _id: params.id }))
    }
  }, [])

  return (
    <div className='mainDetails'>
      <div className='firstDetails'>
        <div className='mainDetails'>
          <img src={auto} alt="" className='photoDetails' />
          <h1 className='detailsTitle'>{data.name}</h1>
          <Anchor to="#" className="Detailsbtn"> Build your {data.name} </Anchor>
        </div>
        <div className='speedDetails'>
          <div className='carDetails'>
            <img src={motor} alt="" />
            <h3>Potencia:{data.hp}CV</h3>
          </div>
          <div className='carDetails'>
            <img src={top} alt="" />
            <h3>Top Speed:{data.top_speed}Km/h</h3>
          </div>
          <div className='carDetails'>
            <img src={aceleracion} alt="" />
            <h3>0-100Km/h:{data.acceleration}s</h3>
          </div>
        </div>
      </div>
      <div className='textDetails'>
        <div className='descriptionDetails'>
          <img src={data.photo_description1} alt="" className='desciption1' />
          <div className='desciptiontext1'>
            <h3>Overview</h3>
            <p>{data.description1}</p>
          </div>
        </div>
        <div className='descriptionDetails' >
          <div className='desciptiontext2'>
            <h3>Exterior</h3>
            <p>{data.description2}</p>
          </div>
          <img src={data.photo_description2} alt="" className='description2' />
        </div>
      </div>
      <div className='Btn'>
        <Anchor to={`/customize/${data._id}`} className="lastBtn"> Build your {data.name} </Anchor>
      </div>

    </div>
  )

}

export default Details