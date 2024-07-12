import React from 'react'
import './Hero.css'
import dark_arrow from '../../images/dark-arrow.png'

const Hero = () => {
  return (
    <div className="Hero container">
      <div className="hero-text">
        <h1>What we offer</h1>
        <p>
          With care and expertise, we raise healthy poultry and fish for sale.
          Our commitment to quality and sustainability ensures superior products
          for our customers.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero