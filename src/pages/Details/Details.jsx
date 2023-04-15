import React, { useEffect, useState } from 'react'
import "./details.css"
import { Link as Anchor } from 'react-router-dom'
import motor from "../../assets/img/motor-icon.png"
import velocimeter from "../../assets/img/velocimeter-icon.png"
import aceleration from "../../assets/img/timer-icon.png"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import carActions from "../../store/model/actions.js"

const { getOne } = carActions


const Details = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  const data = useSelector((store) => store.model.car)
  useEffect(() => {
    dispatch(getOne({ _id: params.id }))
  }, [])

  setTimeout(() => {
    setLoaded(true)
    console.log("...loaded")
  }, 100);

  return (
    <>
      {loaded ?
        <div className='mainDetails'>
          <div className='firstDetails'>
            <div className='mainDetails'>
              <video className="photoDetails" loop muted autoPlay>
                <source src={data.video} type="video/mp4" />
              </video>
              <h1 className='detailsTitle'>{data.name}</h1>
              <Anchor to="#" className="Detailsbtn"><p> Build your {data.name} </p></Anchor>
            </div>
            <div className='speedDetails'>
              <div className='carDetails'>
                <img src={motor} alt="" />
                <div className='text-details-cars'>
                  <h3>POWER: </h3><p>{data.hp}CV</p>
                </div>
              </div>
              <div className='carDetails'>
                <img src={velocimeter} alt="" />
                <div className='text-details-cars'>
                  <h3>MAX. SPEED: </h3><p>{data.top_speed}Km/h</p>
                </div>
              </div>
              <div className='carDetails'>
                <img src={aceleration} alt="" />
                <div className='text-details-cars'>
                  <h3>0-100 km/h: </h3><p>{data.acceleration}s</p>
                </div>
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
            <Anchor to="/customize" className="lastBtn"> Build your {data.name} </Anchor>
          </div>


        </div>
        : null}
    </>
  )

}

export default Details