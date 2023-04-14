import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './customize.css'
import actionColor from '../../store/color/actions.js';
import { useParams } from "react-router"
import carActions from "../../store/model/actions.js"
import rimsActions from "../../store/rims/actions.js"
const { getAllColors } = actionColor;
const { getOne } = carActions;
const { getAllRims } = rimsActions;

export default function Customize() {
  const dispatch = useDispatch();
  const color = useSelector((store) => store.colors.colors);
  const data = useSelector((store) => store.model?.car)
  const rim = useSelector((store) => store.rim?.rim)
  console.log(rim)
  const colorsArray = color ? Object.values(color) : [];
  const rimsArray = rim ? Object.values(rim) : [];
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedRimId, setSelectedRimId] = useState(null);
  const params = useParams()
/* 
  const color_id = rim?.rim?.color_id

  const rimColor = color?.Find((evento) => rim?.color_id === evento?._id)
  console.log(rimColor) */


  useEffect(() => {
    dispatch(getOne({ _id: params.id }))
    dispatch(getAllColors(params.id))
  }, [dispatch])

/*   useEffect(() => {
    dispatch(getAllRims(rim))
  }, [dispatch]) */

  return (
    <div className='cont-customize'>
      <div className='section-prev-custom'>
        <div className='title-customize'>
          <img className='img-title-makeIt' src="../image/title-makeIt.png" alt="make it" />
        </div>
        <div className='contenedor-img-car'>
          <img className="img-config" src={selectedColorId ? data?.photos[selectedColorId] : data?.photo} alt="make it" />
        </div>
      </div>
      <div className='div-color'>
        <h2 className='title-color'>Select color</h2>
        <div className='section-color'>
          {colorsArray?.map((color) => (
            <button key={color?._id} onClick={() => setSelectedColorId(color?._id)}>
              <img className="color-1" srcSet={color?.color_code} alt={color?.color_name} />
            </button>
          ))}
        </div>
      </div>
      <div className='div-color'>
        <h2 className='title-color2'>Select Rims</h2>
        <div className='section-color2'>
          {rimsArray?.map((rim) => (
            <button key={rim?._id} onClick={() => setSelectedRimId(rim?._id)}>
              <img className="color-1" srcSet={rim?.photo_select} alt={rim?.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

