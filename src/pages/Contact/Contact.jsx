import React, { useState } from 'react';
import './contact.css';
import img from '../../images/titlecontact.png';
import { Link as Anchor } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('service');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puede agregar la lógica para enviar los datos del formulario
    console.log('Form submitted', {
      name,
      phone,
      email,
      category,
      message,
    });
  };

  return (
    <div className="bg-contact">
      <div className="bg-title-contact">
        <img src={img} alt="contact" />
      </div>
      <div className="div-contact">
        <form className="formcontact" onSubmit={handleSubmit}>
            <select className="contact" value={category} onChange={handleCategoryChange}>
              <option className='option' value="select-service">Select Service</option>
              <option className='option' value="service">Service</option>
              <option className='option' value="payments">Payments</option>
              <option className='option' value="sales">Sales</option>
              <option className='option' value="other">Other</option>
            </select>
            <input name="name" className="contact" type="text" value={name} onChange={handleNameChange} placeholder="Name" required />
            <input name="phone" className="contact" type="text" value={phone} onChange={handlePhoneChange}  placeholder="Phone" required/>
            <input name="email" className="contact" type="email" value={email} onChange={handleEmailChange}  placeholder="Email" required/>
            <textarea value={message} onChange={handleMessageChange} />
            <Anchor to='/services/contact-us' className="btncontact">Send</Anchor>
          {/* <button name="name" className="btncontact" type="submit">Send</button> */}
        </form>
      </div>
    </div>
  );
}