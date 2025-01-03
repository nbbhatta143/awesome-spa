import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './style/App.css';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import SpaCard from './component/SpaCard';
import Footer from './component/Footer';
import BookingPage from './component/BookingPage';


  // Spa services data
  const images = [
    {
      src: 'https://th.bing.com/th/id/OIP.HZAPB-Rjmsw0hAqip73azwHaDq?rs=1&pid=ImgDetMain',
      alt: 'Tinting Service',
      description: 'Nail care services for a perfect look.',
      price: '30'
    },
    {
      src: 'https://th.bing.com/th/id/R.3eeaa0b56be498d9430b4e714492dea7?rik=UX1c4RBj7ybmZg&pid=ImgRaw&r=0',
      alt: "Threading",
      description: 'Relaxing facial treatments for a rejuvenated skin.',
      price: '30'
    },
    {
      src: 'https://th.bing.com/th/id/R.998991e212bd8d8e43e9f1903305bea0?rik=e3WYCZqey7W%2bOQ&pid=ImgRaw&r=0',
      alt: 'Waxing Service',
      description: 'Get smooth skin with our waxing services.',
      price: '30'
    },
  ];


function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar title={"SPA Salon"} isFooter={true}/>
        <Routes>
          <Route path='/'element={
            <>
              <header className="App-header">
                <Carousel images={images} />
                <div className="card-container">
                  <SpaCard images={images}/>
                </div>
              </header>
            </>}
          />
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
