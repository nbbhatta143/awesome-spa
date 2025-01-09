// src/components/BookingPage.js
import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import emailjs from 'emailjs-com'; // Import EmailJS
import BookButton from './BookButton';
import '../style/BookingPage.css'

const BookingPage = () => {
   const navigate = useNavigate();
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    time: '',
  });
  // Get the service name from the URL
  const { serviceName } = useParams();
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formData,
        'YOUR_USER_ID' 
      )
      .then((response) => {
        console.log('Success:', response);
        alert('Your booking was successfully submitted!');
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('There was an error submitting your booking. Please try again.');
      });

    // Clear form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      date: '',
      time: '',
    });
  };
  const handleCancel =()=>{
    navigate(-1)
  }

  return (
    <div className="booking-page">
      <h1>Book Your Appointment for {serviceName}</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* <button type="submit" className="submit-button">
          Submit Booking
        </button> */}
        
        <div className="button-group">
          <BookButton type="submit" label='Submit' displayButton={true} /> 
          <BookButton onClick={handleCancel} label='Cancel' displayButton={true}/> 
        </div>  


      </form>
    </div>
  );
};

export default BookingPage;
