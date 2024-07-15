// src/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Life Planning, Making<br></br> Easy to Turn Dreams a Reality</h1>
      <p>Get Exclusive offers on purchase of any plans</p>
      <div class="hero-btn">

        <label for="email"></label>
        <input type="email" id="email" name="email" placeholder="Your Email"></input>
        
        <button className="hero-btn-one">Sign Up</button>
      </div>  
    </div>
      
  );
}

export default Hero;
