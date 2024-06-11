import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>Welcome to Bakery Delights! We are passionate about creating delicious and freshly baked treats for our customers.</p>
          <p>Our journey began with a simple goal: to bring joy to people's lives through the goodness of homemade baked goods. Over the years, we have perfected our recipes and techniques to ensure every bite is a delightful experience.</p>
        </div>
        <div className="about-image">
          <img src="https://media.istockphoto.com/id/1208410330/photo/colorful-donuts-flying-on-yellow-background-sweet-food-background.jpg?s=612x612&w=0&k=20&c=5jE7M_8M0xXViVU2eCJNZOkarsuqOoBkvR6z4qIe69E=" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
