import React from 'react';
import './Menu.css';

import chocolateCroissantImage from '../images/chocolate croissant.jpeg';
import cookiesImage from '../images/cookies.jpeg';
import cupcakesImage from '../images/cupcakes.jpeg';
import muffinsImage from '../images/muffins.jpeg';
import cinnamonRollsImage from '../images/cinnamon roll.jpeg';
import donutsImage from '../images/donuts.jpeg';
import browniesImage from '../images/brownie.jpeg';
import cheesecakeImage from '../images/cheesecake.jpeg';
import fruitTartImage from '../images/fruit-tart.jpeg';

const menuItems = [
  { name: "Croissants", price: "R35.00", image: chocolateCroissantImage },
  { name: "Chocolate Chip Cookies", price: "R15.00", image: cookiesImage },
  { name: "Cupcakes", price: "R25.00", image: cupcakesImage },
  { name: "Muffins", price: "R20.00", image: muffinsImage },
  { name: "Cinnamon Rolls", price: "R30.00", image: cinnamonRollsImage },
  { name: "Donuts", price: "R20.00", image: donutsImage },
  { name: "Brownies", price: "R25.00", image: browniesImage },
  { name: "Cheesecake", price: "R40.00", image: cheesecakeImage },
  { name: "Fruit Tart", price: "R35.00", image: fruitTartImage }
];

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
