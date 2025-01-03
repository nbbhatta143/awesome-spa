import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Routes instead of Switch
import './style/App.css';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import SpaCard from './component/SpaCard';
import Footer from './component/Footer';
import BookingPage from './component/BookingPage';

import OIP from './images/OIP.jpg';
import Waxing from './images/waxing.png';
import Threading from './images/threading.jpg'
import Homepage from './component/HomePage'


  // Spa services data
  const images = [
    {
      src: OIP,
      alt: 'Tinting Service',
      description: 'Nail care services for a perfect look.',
      price: '30'
    },
    {
      src: Threading,
      alt: "Threading",
      description: 'Relaxing facial treatments for a rejuvenated skin.',
      price: '30'
    },
    {
      src:  Waxing,
      alt: 'Waxing Service',
      description: 'Get smooth skin with our waxing services.',
      price: '30'
    },
  ];

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar title={"Divine Spa"} isFooter={true}/>
        <Homepage images={images}/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          
          <Route path="/nails" element={<SpaCard images={images}/>} />
          <Route path="/facial" element={<SpaCard images={images}/>} />
          <Route path="/wax" element={<SpaCard images={images}/>} />
          <Route path="/spaservices" element={<SpaCard images={images} />} />
          <Route path="/booking/:serviceName" element={<BookingPage />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
  
}

export default App;
