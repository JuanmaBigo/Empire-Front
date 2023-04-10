import React, { useRef } from 'react'
import './login.css'
import axios from "axios";
import Swal from 'sweetalert2'
import img from '../../images/login.png'

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {

        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
    }

    let url = 'http://localhost:8080/api/users/signin'


    let admin
    try {
      await axios.post(url, data)
        .then(res => {
          res.data.user.is_admin ? (admin=true) : (admin=false)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            mail: res.data.user.mail,
            admin
          }))
          setInterval(() => window.location.href = '/', 1000)
        })
        Swal.fire({
          titleText: 'Loggin success',
          icon: 'success',
          confirmButtonText: 'Ok',
          background: 'black',
          customClass: {
            title: 'text-white',
            confirmButton: 'bg-green-500'
          },
          confirmButtonStyles: {
            background: 'red',
            color: 'white'
          }
        });



        event.target.reset()
    } catch(error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Credentials! ',

        })
    }

}
  return (
    <div className='bg-login'>
        <div className='bg-title-login'>
            <img src={img} alt="login" />
        </div>
        <div className='div-login'>
        <form className='formlogin' onSubmit={handleSubmit}>
            <input name="mail" className="login" type="email" placeholder="Email" ref={emailRef} required/>
            <input name="password" className='login' type="password"  placeholder='Password' ref={passwordRef} required/>
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
