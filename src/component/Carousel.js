import React, { useState, useEffect } from 'react';
import '../style/Carousel.css'; // Import the CSS for styling the carousel

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="carousel-image" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="description">{image.description}</div>
          </div>
        ))}
      </div>
      
      <button className="carousel-prev" onClick={prevImage}>
        &#10094;
      </button>
      <button className="carousel-next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
