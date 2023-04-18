import React from 'react'
import './navBody.css'
import Image from '../Image/Image'
import closeBtn from '../../images/closeBtn.svg'
import { Link as Anchor } from 'react-router-dom'
import apiUrl from '../../configHost'
import axios from 'axios';


export default function NavBody({ handleRender }) {
    let token = localStorage.getItem('token')
    let user = JSON.parse(localStorage.getItem('user'))

    async function handleSignout() {
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + 'auth/signout'
        try {
            await axios.post(url, null, headers)
                .then(res => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div onClick={handleRender} className='closeBtn'>
                <Image src={closeBtn} />
            </div>
            <div className='navBody'>
                <div className='navBtns'>
                    <Anchor to='/home' className='header-component'>HOME</Anchor>
                    <Anchor to='/vehicles' className='header-component'>VEHICLES</Anchor>
                    <Anchor to='/AIEngine' className='header-component'>AI ENGINE</Anchor>
                    <Anchor to='/art&culture' className='header-component'>ART & CULTURE</Anchor>
                    <Anchor to='/services' className='header-component'>CONTACT US</Anchor>
                    {token ? <Anchor to='/cart' className='header-component'>CART</Anchor> : null}
                    {token === null ? <Anchor to='/signin' className='header-component'>LOGIN</Anchor> : null}
                    {token === null ? <Anchor to='/register' className='header-component'>REGISTER</Anchor> : null}
                    {user?.admin? <Anchor to='/add-stock' className='header-component'>ADD STOCK</Anchor> : null}
                </div>
                {token ? <button className='header-signout' onClick={handleSignout}><p>SIGN OUT</p></button> : null}
            </div>
        </>
    )
}
