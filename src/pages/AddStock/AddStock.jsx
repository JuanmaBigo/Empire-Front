import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast';
import actions from '../../store/model/actions'
import axios from 'axios'
import './AddStock.css'
import apiUrl from '../../configHost'
const { getAllCars, getOne } = actions




export default function AddStock() {
    const dispatch = useDispatch()
    const [selectedCar, setSelectedCar] = useState('');
    let stock = useRef()

    useEffect(() => {
        dispatch(getAllCars())
    }, []);

    useEffect(() => {
        if (selectedCar !== '') {
            dispatch(getOne({ _id: selectedCar }))
        }
    }, [selectedCar]);


    let cars = useSelector(store => store.model.cars)
    let car = useSelector(store => store.model.car)

    async function updateStock() {
        let data =
        {
            id: selectedCar,
            stock: stock.current.value
        }
        let url = apiUrl + 'cars/stock'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        try {
            await axios.post(url, data, headers)
            dispatch(getOne({ _id: selectedCar }))
            toast.success("Stock Updated")
        } catch (error) {
            console.log(error)
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }
    }


    return (
        <div className='add-stock-page'>
            <div className='add-stock-title'>ADD STOCK</div>
            <div className='actual-stock'>
                <p>{car.name}</p>
                <img src={car?.photo} className='car-photo-stock'></img>
                <p>STOCK: {car?.stock}</p>
            </div>
            <div className='input-stock'>
                <select
                    className='select-input-stock'
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                >
                    <option value="">Select Car</option>
                    {cars?.map((car) => (
                        <option key={car?._id} value={car?._id}>{car?.name}</option>
                    ))}
                </select>
                <div className='input-updated-stock'>
                    <p>UPDATE STOCK: </p>
                    <input name="stock" className="stock" type="number" placeholder="stock" ref={stock} />
                </div>
            </div>
            <button className='stock-btn' onClick={updateStock}>UPDATE</button>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    )

}
