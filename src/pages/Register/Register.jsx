import React, { useRef } from 'react'
import './register.css'
import img from '../../images/titleregister.png'
import { Link as Anchor } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../configHost';
import axios from 'axios';




export default function Register() {
  let name = useRef()
  let email = useRef()
  let password = useRef()
  let passwordConfirm = useRef()
  const navigate = useNavigate()

  async function handleRegister(event) {
    event.preventDefault()
    console.log("register")
    if (password.current.value === passwordConfirm.current.value) {
      let data = {
        name: name.current.value,
        mail: email.current.value,
        password: password.current.value,
      }

      console.log(data)
      let url = apiUrl + 'auth/signup'

      try {
        await axios.post(url, data)
        toast.success("User registered successfully!")
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
      } catch (error) {
        if (typeof error.response.data.message === 'string') {
          toast.error(error.response.data.message)
        } else {
          error.response.data.message.forEach(err => toast.error(err))
        }
      }
    }else{
      toast.error("Passwords do not match")
    }
  }


      return (
        <div className='bg-register'>
          <div className='bg-title-register'>
            <img src={img} alt="register" />
          </div>
          <div className='div-register'>
            <form className='formRegister'>
              <input name="name" className="register" type="text" placeholder="NAME" ref={name} />
              <input name="email" className="register" type="email" placeholder="EMAIL" ref={email} />
              <input name="password" className='register' type="password" placeholder='PASSWORD' ref={password} />
              <input name="password" className='register' type="password" placeholder='CONFIRM PASSWORD' ref={passwordConfirm} />
              <div className='text-register'>
                <p>Already have an account?</p><Anchor to='/signin' className="link">SIGN IN</Anchor>
              </div>
              <input className='btnRegister' type="submit" value="REGISTER" onClick={handleRegister}/>
            </form>
          </div>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </div>
      )
}