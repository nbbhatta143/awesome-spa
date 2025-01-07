import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './style/App.css';
import Navbar from './component/Navbar';
// import SpaCard from './component/SpaCard';
import Footer from './component/Footer';
import BookingPage from './component/BookingPage';

import OIP from './images/OIP.jpg';
import Waxing from './images/waxing.png';
import Threadings from './images/threading.jpg'
import skiltreatment from "./images/the-dermalogica-skin-treatment.png"

import Homepage from './component/HomePage'
// import Tint from './component/Tint';
import message from "./images/sddefault.jpg"
import treatment from "./images/the-dermalogica-skin-treatment.png"
import stone_massage from "./images/1296x728_HEADER_benefits-of-hot-stone-massage.jpg"
// import Threading from './component/Threading';
import ServicesView from './component/ServicesView';

import threading from "./images/threading_1.jpg"
import chin from "./images/chin_threading.jpg"
import fullface from "./images/full_face.jpg"

  // Spa services data
  const ServicesNav = [
    {
      src: Threadings,
      alt: "Threading",
      description: 'Relaxing facial treatments for a rejuvenated skin.',
      price: '30'
    },
    {
      src:  Waxing,
      alt: 'Waxing',
      description: 'Get smooth skin with our waxing services.',
      price: '30'
    },
      {
        src: skiltreatment,
        alt: 'Facial',
        description: 'Rejuvenate your skin with our revitalizing facial treatments.',
        price: 90,
      },
      {
        src: OIP,
        alt: 'Tinting',
        description: 'Nail care services for a perfect look.',
        price: '30'
      }
  ];


// Sample data for spa services
const tintServices = [
  {
    src:  message,
    alt: 'Relaxing Massage',
    description: 'Experience the ultimate relaxation with our soothing massages.',
    price: 120,
  },
  {
    src: treatment,
    alt: 'Facial Treatment',
    description: 'Rejuvenate your skin with our revitalizing facial treatments.',
    price: 90,
  },
  {
    src: stone_massage,
    alt: 'Hot Stone Therapy',
    description: 'Relieve tension with our hot stone therapy session.',
    price: 150,
  },
];

// Sample data for spa services
const threadingServices = [
  {
    src:  threading,
    alt: 'Eyebrow',
    description: 'Divine Offers expert eyebrow threading services, with skilled professionals remove hairs with care in rows rather than individually. Visit us to connect with our top brow threader for the best service.',
    price: 120,
  },
  {
    src: chin,
    alt: 'Upper Lip, Chin, Sides And Forehead',
    description: 'Professional threading services for the upper lip, chin, sides, and forehead, ensuring a smooth and precise result for every area.',
    price: 90,
  },
  {
    src: fullface,
    alt: 'Full Face',
    description: 'Experience flawless skin with our full face threading service, tailored to perfection.',
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
          <Route path="/" element={<Homepage images={ServicesNav} />} />
          <Route path='/tint' element={<ServicesView images={tintServices} servicesName="Tinting Services"/>}/>
          <Route path='/threading' element={<ServicesView images={threadingServices} servicesName="Threading Services"/>}/>
          <Route path='/facial' element={<ServicesView images={threadingServices} servicesName="Facial Services"/>}/>
          <Route path='/wax' element={<ServicesView images={threadingServices} servicesName="Waxing Services"/>}/>
          <Route path="/henna" element={<ServicesView images={threadingServices} servicesName="Henna Tatto"/>}/>
          {/* <Route path="/tint" element={<Tint />} /> */}
          {/* <Route path="/threading" element={<Threading />} /> */}
          {/* <Route path="/facial" element={<SpaCard images={tintServices} displayButton={false}/>} /> */}
          {/* <Route path="/wax" element={<SpaCard images={images} displayButton={false}/>} /> */}
          {/* <Route path="/spaservices" element={<SpaCard images={images} displayButton={false} />} /> */}
          <Route path="/booking/:serviceName" element={<BookingPage />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
  
}

export default App;
