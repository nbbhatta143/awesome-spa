
import Carousel from './Carousel';
import SpaCard from './SpaCard';

function Homepage({images}){
  return (
    <body className="App-header">
      <Carousel images={images} />      
      <h3>Our Services</h3>
      <div className="card-container">
        <SpaCard images={images} />
      </div>
    </body>
  );
};
export default Homepage;
