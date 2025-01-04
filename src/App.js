import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './style/App.css';
import Navbar from './component/Navbar';
import SpaCard from './component/SpaCard';
import Footer from './component/Footer';
import BookingPage from './component/BookingPage';

import OIP from './images/OIP.jpg';
import Waxing from './images/waxing.png';
import Threading from './images/threading.jpg'
import Homepage from './component/HomePage'
import Tint from './component/Tint';
import relaxing from "./images/sddefault.jpg"
import skiltreatment from "./images/the-dermalogica-skin-treatment.png"
import hot_stone_massage from "./images/1296x728_HEADER_benefits-of-hot-stone-massage.jpg"

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
     {
        src:  relaxing,
        alt: 'Relaxing Massage',
        description: 'Experience the ultimate relaxation with our soothing massages.',
        price: 120,
      },
      {
        src: skiltreatment,
        alt: 'Facial Treatment',
        description: 'Rejuvenate your skin with our revitalizing facial treatments.',
        price: 90,
      },
      {
        src: hot_stone_massage,
        alt: 'Hot Stone Therapy',
        description: 'Relieve tension with our hot stone therapy session.',
        price: 150,
      },
  ];

function App() {
  // basename={process.env.PUBLIC_URL}
  return (
    <div className="App">
      <Router >
        <Navbar title={"Divine Spa"} isFooter={true}/>
        <Routes>
          <Route path="/" element={<Homepage images={images} />} />
          <Route path="/tint" element={<Tint />} />
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
