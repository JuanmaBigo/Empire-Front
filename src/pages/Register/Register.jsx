import React, { useRef } from 'react'
import './register.css'
import axios from "axios";
import Swal from 'sweetalert2'
import img from '../../images/titleregister.png'

export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
        [nameRef.current.name]: nameRef.current.value,
        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
        // [confirmPasswordRef.current.name]: confirmPasswordRef.current.value
    }
    
    
    let url = 'http://localhost:8080/api/users/signup'
    console.log(data)

    if (data.name.length < 3) {
      Swal.fire('Name must be at least 3 characters long');
      return;
    }
  
    if (data.password.length < 8) {
      Swal.fire('Password must be at least 8 characters long');
      return;
    }

    // if(passwordRef.current.value !== confirmPasswordRef.current.value){
    //   Swal.fire('Passwords do not match');
    //   return;
    // }
    
    // if(confirmPasswordRef.current.value === ''){
    //   Swal.fire('Please confirm your password');
    //   return;
    // }
    

    try {
        await axios.post(
            url,    /* URL del endpoint para crear una categoria */
            data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
        )
       
        Swal.fire({
          title: 'User successfully created',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        event.target.reset()
    } catch(error) {
      
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong Check that inputs are corrects! ',
          
        })
        console.log('ocurrio un error')
    }

}
  return (
    <div className='bg-register'>
        <div className='bg-title-register'>
            <img src={img} alt="register" />
        </div>
        <div className='div-register'>
        <form className='formRegister' onSubmit={handleSubmit}>
            <input name="name" className="register" type="text" placeholder="Name" id='name' ref={nameRef} required  />
            <input name="mail" className="register" type="email" placeholder="Email" id='email' ref={emailRef} required/>
            <input name="password" className='register' type="password"  placeholder='Password' ref={passwordRef} required/>
            {/* <input name="confirmPassword" className='register' type="password"  placeholder='Confirm Password' ref={confirmPasswordRef} required/> */}
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

