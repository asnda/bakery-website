// src/components/ContactUs.js

import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below or reach us at the provided contact details.</p>
        <div className="contact-us-info">
          <div className="contact-details">
            <h3>Our Address</h3>
            <p>123 Bakery Lane</p>
            <p>Sweet City, SC 12345</p>
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
            <h3>Email</h3>
            <p>contact@bakerydelight.com</p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
