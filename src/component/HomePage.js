
import Carousel from './Carousel';
import SpaCard from './SpaCard';

function Homepage({images}){
  return (
    <header className="App-header">
      <Carousel images={images} />
      <div className="card-container">
        <SpaCard images={images} />
      </div>
    </header>
  );
};
export default Homepage;
