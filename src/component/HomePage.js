
// import Carousel from './Carousel';
// import SpaCard from './SpaCard';

// function Homepage({images}){
//   return (
//     <main className="App-header">
//       <Carousel images={images} />      
//       <h3>Our Services</h3>
//       <div className="card-container">
//         <SpaCard images={images} />
//       </div>
//     </main>
//   );
// };
// export default Homepage;
import React, { useState } from 'react';
import Carousel from './Carousel';
import SpaCard from './SpaCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style/Homepage.css';

function Homepage({ images }) {
  const [showBookingSection, setShowBookingSection] = useState(false); // Toggle booking section visibility
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date
  const [availableTimes, setAvailableTimes] = useState([]); // Track available times
  const [selectedTime, setSelectedTime] = useState(null); // Track selected time
  const [showServices, setShowServices] = useState(false); // Toggle services visibility

  // Office hours
  const officeHours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '10 AM - 5 PM' },
    { day: 'Wednesday', hours: '10 AM - 5 PM' },
    { day: 'Thursday', hours: '10 AM - 5 PM' },
    { day: 'Friday', hours: '10 AM - 5 PM' },
    { day: 'Saturday', hours: '09 AM - 06 PM' },
    { day: 'Sunday', hours: '09 AM - 06 PM' },
  ];

  const timeSlots = ['10:00 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAvailableTimes(timeSlots);
    setSelectedTime(null); // Reset the selected time
    setShowServices(false); // Ensure services are hidden initially
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowServices(false); // Ensure services are hidden initially
  };

  return (
    <main className="App-header">
      {/* Carousel always visible */}
      <Carousel images={images} />

      {/* Office Hours Section */}
      <div className="office-hours-container">
        <h3>Office Hours</h3>
        <ul className="office-hours-list">
          {officeHours.map((item, index) => (
            <li key={index} className="office-hour-item">
              <strong>{item.day}:</strong> {item.hours}
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Section */}
      {showBookingSection && (
        <div className="booking-section">
          {/* Calendar */}
          <h3>Select a Date</h3>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="custom-calendar"
          />

          {/* Available Times */}
          {selectedDate && (
            <div className="date-time-display">
              <h4>Available Times for {selectedDate.toDateString()}:</h4>
              <ul>
                {availableTimes.map((time, index) => (
                  <li
                    key={index}
                    className={`time-slot ${
                      selectedTime === time ? 'selected' : ''
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Choose Our Services */}
          {selectedTime && (
            <div className="choose-services-section">
              <button
                className="choose-services-btn"
                onClick={() => setShowServices(true)}
              >
                Choose Our Services
              </button>
            </div>
          )}
        </div>
      )}

      {/* Services Section */}
      {showServices && (
        <div className="services-section">
          <h3>Our Services</h3>
          <div className="card-container">
            <SpaCard images={images} />
          </div>
        </div>
      )}

      {/* Book Now Button */}
      {!showBookingSection && (
        <button className="book-now-btn" onClick={() => setShowBookingSection(true)}>
          Book Now
        </button>
      )}
    </main>
  );
}

export default Homepage;
