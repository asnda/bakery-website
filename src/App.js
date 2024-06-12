import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import CustomCakes from './components/CustomCakes';
import Contact from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap Routes */}
          <Route exact path="/" element={<Home />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="custom-cakes">
        <CustomCakes />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
