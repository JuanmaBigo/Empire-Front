import React, { useEffect, useState } from 'react'
import './customize.css'
import { useDispatch, useSelector } from 'react-redux'
import colorActions from '../../store/color/actions'
import rimActions from '../../store/rims/actions'
import apiUrl from '../../configHost.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from "react-router"
import modelActions from "../../store/model/actions.js"
import img from '../../assets/img/title-makeIt.png'
import { Toaster, toast } from 'react-hot-toast'
const { getAllColors } = colorActions
const { getAllRims } = rimActions
const { getOne } = modelActions


export default function Custom() {
    let params = useParams()
    let car_id = params.id
    const [selectedRim, setSelectedRim] = useState();
    const [selectedColor, setSelectedColor] = useState();
    const [loaded, setLoaded] = useState(false)
    const [loaded2, setLoaded2] = useState(false)
    const [loaded3, setLoaded3] = useState(false)
    const [selectedOption, setSelectedOption] = useState('option 1');
    const [selectedOptionRim, setSelectedOptionRim] = useState('option rim 1');
    const [photoVehicle, setPhotoVehicle] = useState('')
    let navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOne({ _id: car_id }))
        dispatch(getAllColors(car_id))
    }, []);

    useEffect(() => {
        if (loaded2 === true) {
            dispatch(getAllRims(selectedColor))
        }
    }, [selectedColor, selectedRim, loaded2]);

    setTimeout(() => {
        setLoaded(true) //dice que ya cargo la pagina para traer los colores
    }, 200);

    setTimeout(() => {
        setLoaded2(true)  //dice que ya cargo la pagina para traer las llantas
    }, 600);

    useEffect(() => {  //solo al pricipio
        // console.log('colores', colors)
        if (colors.length > 0) {
            console.log('colores', colors)
            dispatch(getAllRims(colors[0]?._id))
            setSelectedColor(colors[0]?._id)
            setSelectedRim(rims[0]?._id)
            setPhotoVehicle(rims[0]?.photo)
        } else {
            setLoaded3(!loaded3)
        }
    }, [loaded, loaded2, loaded3]);

    let colors = useSelector(store => store.colors.colors)
    let rims = useSelector(store => store.rim.rim)
    let car = useSelector(store => store.model.car)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedColor(event.target.id)
    }

    if (loaded2 === true) {
        setTimeout(() => {
            setPhotoVehicle(rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 1].photo)
        }, 300);
    }

    const handleOptionChangeRims = (event) => {
        setSelectedOptionRim(event.target.value);
        setSelectedRim(event.target.id)
    };

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    let url = `${apiUrl}items`

    async function handleItem() {
        let token = localStorage.getItem('token')
        if (token) {
            let data = {
                car_id: car_id,
                color_id: selectedColor,
                rim_id: selectedRim,
                bought: false
            }

            try {
                await axios.post(url, data, headers)
                navigate("/cart")
            } catch (error) {
                console.log(error)
            }
            console.log(data)
        } else {
            toast.error('You must be logged in to add to cart', 
            {style: {
                marginBottom: '100px',
            }})
        }
    }


    return (
        <div>
            <div className='cont-customize'>
                <div className='section-prev-custom'>
                    <div className='title-customize'>
                        <img className='img-title-makeIt' src={img} alt="make it" />
                    </div>
                    <div className='contenedor-img-car'>
                        <img className="img-config" src={photoVehicle} alt="make it" />
                    </div>
                </div>
                <div className='div-color'>
                    <h2 className='title-color'>COLOR SELECTION</h2>
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
                    <h2 className='title-color2'>RIMS SELECTION</h2>
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
            <div>
                <div className='resume-section'>
                    <div className='contenedor-resume-custom'>
                        <div className='img-resume'>
                            <img
                                src={photoVehicle}
                                alt="Imagen de ejemplo"
                                className='image-resume'
                            />
                        </div>

                        <div className='resume-info'>
                            <h2 className='resume-title'>RESUME</h2>
                            <div className='info-item-resume'>
                                <div>
                                    <h3>BASE</h3>
                                    <p>{car?.name}</p>
                                </div>
                                <div>
                                    <h1>${(car?.price)?.toLocaleString("es-VE")}</h1>
                                </div>
                            </div>
                            <div className='info-item-resume'>
                                <div>
                                    <h3>COLOR</h3>
                                    <p>{colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.name}</p>
                                </div>
                                <div>
                                    <h1>${(colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.price_color)?.toLocaleString("es-VE")}</h1>
                                </div>
                            </div>

                            <div className='info-item-resume'>
                                <div>
                                    <h3>RIMS</h3>
                                    <p>{rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 1]?.name}</p>
                                </div>
                                <div>
                                    <h1>${(rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 1]?.price_rim)?.toLocaleString("es-VE")}</h1>
                                </div>
                            </div>

                            <div className='section-addcart1 section-addcart'>
                                <h2>GRAND TOTAL</h2>
                                <h2>${(car?.price + colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.price_color + rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 1]?.price_rim)?.toLocaleString("es-VE")}</h2>
                            </div>
                            <div className='section-addcart'>
                                <h2>RESERVATION</h2>
                                <h2>${(car?.reservePrice + colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.price_color + rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 1]?.price_rim)?.toLocaleString("es-VE")}</h2>
                            </div>
                            <button className='Btn-custome' onClick={handleItem}>ADD TO CART</button>
                        </div>
                    </div>
                    <Toaster
                        position="center-bottom"
                        reverseOrder={false}
                    />
                </div>
            </div>
        </div>
    )
}