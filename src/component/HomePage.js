
import Carousel from './Carousel';
import SpaCard from './SpaCard';

function Homepage({images}){
  return (
    <main className="App-header">
      <Carousel images={images} />      
      <h3>Our Services</h3>
      <div className="card-container">
        <SpaCard images={images} />
      </div>
    </main>
  );
};
export default Homepage;
