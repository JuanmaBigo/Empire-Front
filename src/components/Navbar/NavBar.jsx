import React from 'react'
import './navbar.css'
import Image from '../Image/Image'
import menuHam from '../../images/Menu (1).png'

export default function NavBar({onClick}) {
    return (
        <div onClick={onClick} className='ham-menu'>
            <Image className='hamburguer-menu' src={menuHam} alt='menu-hamburguesa'/>
        </div>
    )
}
