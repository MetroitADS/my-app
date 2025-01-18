import React from 'react';
import './ButtonsCollection.css'; 

const ButtonsCollection = () => {
  return (
    <div className="buttons-container">
      <div className="button-box">
        <button className="gradient-button">Gradient</button>
      </div>
      <div className="button-box bg-dark">
        <button className="glass-button">Glassmorphism</button>
      </div>
      <div className="button-box bg-gray">
        <button className="neumorphism-button">Neumorphism</button>
      </div>
      <div className="button-box">
        <button className="three-d-button">3D</button>
      </div>
      <div className="button-box">
        <button className="icon-button">
          <i className="fas fa-play"></i> Play
        </button>
      </div>
      <div className="button-box">
        <button className="border-button">Animated Border</button>
      </div>
      <div className="button-box">
        <button className="floating-button">Floating</button>
      </div>
      <div>
        <button className="glowing-button">Glowing</button>
      </div>
      <div className="button-box">
        <button className="ripple-button">Ripple Effect</button>
      </div>
      <div className="button-box">
        <button className="outline-hover-button">Outline Hover</button>
      </div>
      <div className="button-box">
        <button className="skewed-button">Skewed Button</button>
      </div>
      <div className="button-box">
        <button className="shadow-button">Shadow</button>
      </div>
      <div className="button-box">
        <button className="round-icon-button">
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="button-box">
        <button className="text-icon-button">
          <i className="fas fa-download"></i> Download
        </button>
      </div>
      <div className="button-box">
        <button className="loading-button">
          Loading
          <div className="spinner"></div>
        </button>
      </div>
    </div>
  );
};

export default ButtonsCollection;