import React from 'react'
import './navBody.css'
import Image from '../Image/Image'
import closeBtn from '../../images/closeBtn.svg'


export default function NavBody({handleRender}) {
    return (
        <>
         <div onClick={handleRender} className='closeBtn'>
            <Image src={closeBtn} />
        </div>
        <div className='navBody'>
           <h3>HOME</h3>
           <h3>ART & CULTURE</h3>
           <h3>VEHICLES</h3>
           <h3>AI ENGINE</h3>
           <h3>CART</h3>
           <h3 className='signout'>SING OUT</h3>
        </div>
    </>
    )
}
