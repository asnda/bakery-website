import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
