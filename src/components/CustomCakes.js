import React from 'react';
import './CustomCakes.css';
import customCakeImage from '../images/cakes.jpeg'; // Make sure to have this image in your images folder

const CustomCakes = () => {
  return (
    <div className="custom-cakes-section">
      <div className="custom-cakes-content">
        <h2>We Also Make Custom Cakes!</h2>
        <p>Tell us about your dream cake and we'll make it a reality. Whether it's a wedding, birthday, or any special occasion, our custom cakes are crafted to perfection.</p>
        <button className="quote-button">Get a Quote</button>
      </div>
      <div className="custom-cakes-image">
        <img src={customCakeImage} alt="Custom Cake" />
      </div>
    </div>
  );
};

export default CustomCakes;
