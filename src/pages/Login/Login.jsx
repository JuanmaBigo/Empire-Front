import React from 'react'
import './login.css'
import img from '../../images/login.png'

export default function Register() {
  return (
    <div className='bg-login'>
        <div className='bg-title-login'>
            <img src={img} alt="login" />
        </div>
        <div className='div-login'>
        <form className='formlogin'>
            <input name="email" className="login" type="email" placeholder="Email"  required/>
            <input name="password" className='login' type="password"  placeholder='Password' required/>
            <div className='text-login'>
            <p>
            Don't have an account yet? 
            <a href="#" className="link">
              REGISTER
            </a>
          </p>
          </div>
            <input className='btnlogin' type="submit" value="SIGN IN"/>
        </form>
        </div>
    </div>
  )
}
