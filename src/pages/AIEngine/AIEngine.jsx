import React, { useRef, useState } from 'react'
import apiUrl from '../../configHost'
import axios from 'axios'
import './AIEngine.css'
import { useNavigate } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";


export default function AIEngine() {
    const [alert, setAlert] = useState(false)
    const [dataRecommendation, setDataRecommendation] = useState('')
    const [loading, setLoading] = useState(false);

    const [dataCar, setDataCar] = useState({})
    let navigate = useNavigate()
    let textArea = useRef()
    let formAI = useRef()
    let car
    let recommendation

    async function findRecommendation(event) {
        event.preventDefault()
        setLoading(true)

        let data = {
            message: textArea.current.value
        }

        let url = apiUrl + 'cars/AI'
        try {
            await axios.post(url, data)
                .then(res => {
                    recommendation = res.data.recommendation
                    car = res.data.car
                    setDataRecommendation(recommendation)
                    setDataCar(car)
                    event.target.reset()
                    setLoading(false)
                    setAlert(true)
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    function goToVehiclePage() {
        navigate(`/details/${dataCar._id}`)
    }

    return (
        <div className={!alert? 'AI' : 'AI background-alert'} >
            <div className={!loading ? 'AI-page' : 'AI-page background-alert'}>
                <div className='AI-container'>
                    <h1 className='AI-title'>FIND YOUR IDEAL CAR WITH THE POWER OF AI</h1>
                    <form ref={formAI} className='AI-form' onSubmit={findRecommendation}>
                        <textarea ref={textArea} className='text-area-AI' placeholder="Tell us a little bit about yourself, your interests and what are your plans with the car and the AI will recommmend you a perfect solution JUST FOR YOU" />
                        <input type='submit' className='AI-button' value='FIND' />
                    </form>
                </div>

                {alert ?
                    <div className='alert-AI-container'>
                        <div className='alert-AI-btn-close' onClick={() => setAlert(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='close-alert-icon-AI' fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <div className='text-alert-AI'>
                            {dataRecommendation}
                        </div>
                        <button className='alert-AI-btn' onClick={goToVehiclePage}>{dataCar.name}</button>
                    </div> : null}
                
            </div>
            <HashLoader
                    className="spinner"
                    color={'red'}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
        </div>
    )
}
