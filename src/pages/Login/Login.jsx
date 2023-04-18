import React, { useRef, useState } from 'react'
import './login.css'
import img from '../../images/login.png'
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../configHost';
import { Link as Anchor } from 'react-router-dom'





export default function Login() {
  let email = useRef()
  let password = useRef()
  let formReg = useRef()
  const navigate = useNavigate()

  async function handleLogin(event) {
    event.preventDefault()
    console.log()
    console.log()
    let data = {
      mail: email.current.value,
      password: password.current.value
    };

    console.log(data)
    let url = apiUrl + 'auth/signin'

    try {
      await axios.post(url, data)
        .then(res => {
          console.log(res.data.user);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify({
            name: res.data.user.name,
            mail: res.data.user.mail,
            admin: res.data.user.is_admin,
          }))
          navigate('/home');
          window.location.reload();
        })
      formReg.current.reset()
      toast.success("Successful session start")
    } catch (error) {
      toast.error("wrong credentials!")
      toast.error("You haven't verified yourself, check your email", { duration: 5000 })
    }
    event.target.reset()

  }
  return (
    <div className='bg-login'>
      <div className='bg-title-login'>
        <img src={img} alt="login" />
      </div>
      <div className='div-login'>
        <form className='formlogin' onSubmit={handleLogin} >
          <input name="email" className="login email" type="email" placeholder="EMAIL" ref={email} />
          <input name="password" className='login password' type="password" placeholder='PASSWORD' ref={password} />
          <div className='text-login'>
            <p>Don't have an account yet?</p><Anchor to='/register' className="link">REGISTER</Anchor>
          </div>
          <input type="submit" className='btnLogin' value="LOGIN" />
        </form>
      </div>
    </div>
  )
}
