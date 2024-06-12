// src/components/AboutUs.js

import React from 'react';
import './AboutUs.css';
import aboutImage from '../images/about us.jpeg';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Welcome to Bakery Delight! Our bakery is dedicated to creating delicious, freshly baked goods using the finest ingredients. We believe in the art of baking and strive to bring you the best pastries, breads, and cakes.
          </p>
          <p>
            Whether you're looking for a sweet treat, a savory snack, or a custom cake for a special occasion, we have something for everyone. Visit us and taste the difference!
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutImage} alt="About us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
