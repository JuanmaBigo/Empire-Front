import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './customize.css'
import actionColor from '../../store/color/actions.js';
import { useParams } from "react-router"
import carActions from "../../store/model/actions.js"
const { getAllColors } = actionColor;
const { getOne } = carActions

export default function Customize() {
  const dispatch = useDispatch();
  const color = useSelector((store) => store.model?.cars);
  //console.log(useSelector((store) => store))
  useEffect(() => {
  dispatch(getAllColors())
  }, [dispatch]);

  const data = useSelector((store) => store.model?.car)

  //console.log(data)
  const params = useParams()
  useEffect(() => {
    if (data) {
      dispatch(getOne({ _id: params.id }))
    }
  }, [])



  return (
    <div className='cont-customize'>
      <div className='div-rim'>
      <h2 className='title-rim'>Select Rim</h2>
            <div className='section-rim'>
              <img className='rim-1' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAAA1BMVEXjABuGu5rPAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+BsYAAAF7hZJ0AAAAAElFTkSuQmCC'></img>
            </div>
            <h2 className='title-rim'>Select Rim</h2>
      </div>
        <div className='section-prev-custom'>
          <div className='title-customize'>
            <img className='img-title-makeIt' src="../image/title-makeIt.png" alt="make it" />
          </div>
          <div className='contenedor-img-car'>
            <img className='img-config' src={data.photo} alt="make it" />
          </div>
        </div>
        <div className='div-color'>
          <h2 className='title-color'>Select color</h2>
            <div className='section-color'>
              <img className='color-1' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAAA1BMVEXjABuGu5rPAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+BsYAAAF7hZJ0AAAAAElFTkSuQmCC'></img>
            </div>
        </div>
    </div>

  )
}
