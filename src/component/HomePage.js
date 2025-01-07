
import Carousel from './Carousel';
import SpaCard from './SpaCard';

function Homepage({images}){
  return (
    <header className="App-header">
      <Carousel images={images} />      
      <h2>Our Services</h2>
      <div className="card-container">
        <SpaCard images={images} />
      </div>
    </header>
  );
};
export default Homepage;
