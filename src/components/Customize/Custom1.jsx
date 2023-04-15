import React, { useEffect, useRef, useState } from 'react'
import './customize.css'
import { useDispatch, useSelector } from 'react-redux'
import colorActions from '../../store/color/actions'
import rimActions from '../../store/rims/actions'
import apiUrl from '../../configHost.js'


const { getAllColors } = colorActions
const { getAllRims } = rimActions


export default function Custom() {
    let car_id = '64377af5968955ae96af9018'


    const [selectedRim, setSelectedRim] = useState();
    const [selectedColor, setSelectedColor] = useState();
    const [reload, setReload] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [loaded2, setLoaded2] = useState(false)

    const [selectedOption, setSelectedOption] = useState('option 1');
    const [selectedOptionRim, setSelectedOptionRim] = useState('option rim 1');
    const [photoVehicle, setPhotoVehicle] = useState('')
    const inputGroup = useRef()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllColors(car_id))
        setReload(!reload)
    }, []);

    useEffect(() => {
        dispatch(getAllRims(selectedColor))
    }, [selectedColor]);

    function changePhotoVehicle() {
        console.log(rims)
        setPhotoVehicle(rims[1]?.photo)
    }

    setTimeout(() => {
        setLoaded(true) //dice que ya cargo la pagina
    }, 100);

    setTimeout(() => {
        setLoaded2(true)  //dice que ya cargo la pagina
    }, 500);

    useEffect(() => {  //solo al pricipio
        dispatch(getAllRims(colors[0]?._id))
        setSelectedColor(colors[0]?._id)
        setSelectedRim(rims[0]?._id)
        setPhotoVehicle(rims[0]?.photo)
    }, [loaded, loaded2]);

    let colors = useSelector(store => store.colors.colors)
    let rims = useSelector(store => store.rim.rim)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedColor(event.target.id)
    }


    const handleOptionChangeRims = (event) => {
        setSelectedOptionRim(event.target.value);
        setSelectedRim(event.target.id)

        let number = parseInt((event.target.value).charAt((event.target.value).length - 1))
        setPhotoVehicle(rims[number - 1].photo)
    };

    console.log('color = ', selectedColor)
    console.log('rim= ', selectedRim)



    // generar un actions par traer exclusivamente una foto con esto
    //se le pasa el id de la llanta y trae la foto
    // http://localhost:8080/api/rims/64377af4968955ae96af8fb0
    // http://localhost:8080/api/rims/64377af4968955ae96af8fb0

    return (
        <div className='cont-customize'>
           
            <div className='section-prev-custom'>
                <div className='title-customize'>
                    <img className='img-title-makeIt' src="../image/title-makeIt.png" alt="make it" />
                </div>
                <div className='contenedor-img-car'>
                    <img className="img-config" src={photoVehicle} alt="make it" />
                </div>
            </div>
            <div className='div-color'>
                <h2 className='title-color'>Select color</h2>
                <div className='section-color'>
                    <label htmlFor={colors[0]?._id}>
                        <img className="color-1" srcSet={colors[0]?.color_code} alt={colors[0]?.name} />
                        <input
                            type="radio"
                            id={colors[0]?._id}
                            value={'option 1'}
                            checked={selectedOption === 'option 1'}
                            onChange={handleOptionChange}
                            hidden
                        />
                    </label>
                    <label htmlFor={colors[1]?._id}>
                        <img className="color-1" srcSet={colors[1]?.color_code} alt={colors[0]?.name} />
                        <input
                            type="radio"
                            id={colors[1]?._id}
                            value={'option 2'}
                            checked={selectedOption === 'option 2'}
                            onChange={handleOptionChange}
                            hidden
                        />
                    </label>
                    <label htmlFor={colors[2]?._id}>
                        <img className="color-1" srcSet={colors[2]?.color_code} alt={colors[0]?.name} />
                        <input
                            type="radio"
                            id={colors[2]?._id}
                            value={'option 3'}
                            checked={selectedOption === 'option 3'}
                            onChange={handleOptionChange}
                            hidden
                        />
                    </label>
                </div>
            </div>
            <div className='div-color2'>
                <h2 className='title-color2'>Select Rims</h2>
                <div className='section-color2'>
                      <label htmlFor={rims[0]?._id}>
                        <img className="rim-1" srcSet={rims[0]?.photo_select} alt={rims[0]?.name} />
                        <input
                            type="radio"
                            id={rims[0]?._id}
                            value={'option rim 1'}
                            checked={selectedOptionRim === 'option rim 1'}
                            onChange={handleOptionChangeRims}
                            hidden
                        />
                    </label>
                     <label htmlFor={rims[1]?._id}>
                        <img className="rim-1" srcSet={rims[1]?.photo_select} alt={rims[0]?.name} />
                        <input
                            type="radio"
                            id={rims[1]?._id}
                            value={'option rim 2'}
                            checked={selectedOptionRim === 'option rim 2'}
                            onChange={handleOptionChangeRims}
                            hidden
                        />
                    </label>
                     <label htmlFor={rims[2]?._id}>
                        <img className="rim-1" srcSet={rims[2]?.photo_select} alt={rims[0]?.name} />
                        <input
                            type="radio"
                            id={rims[2]?._id}
                            value={'option rim 3'}
                            checked={selectedOptionRim === 'option rim 3'}
                            onChange={handleOptionChangeRims}
                            hidden
                        />
                    </label>
                </div>
            </div>
            </div>
        
    )
}