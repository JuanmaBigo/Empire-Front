import React from 'react'
import './register.css'
import img from '../../images/titleregister.png'

export default function Register() {
  return (
    <div className='bg-register'>
        <div className='bg-title-register'>
            <img src={img} alt="register" />
        </div>
        <div className='div-register'>
        <form className='formRegister'>
            <input name="name" className="register" type="text" placeholder="Name" required  />
            <input name="email" className="register" type="email" placeholder="Email"  required/>
            <input name="password" className='register' type="password"  placeholder='Password' required/>
            <input name="password" className='register' type="password"  placeholder='Confirm Password' required/>
            <div className='text-register'>
            <p>
            Already have an account? 
            <a href="#" className="link">
              LOGIN
            </a>
          </p>
          </div>
            <input className='btnRegister' type="submit" value="Register"/>
        </form>
        </div>
    </div>
  )
}
