import React from 'react';
import './OurServices.css';

const ourServiceCard = ({ title, text, onLearnMore }) => (
  <>
    <div className="service-card">
      <div className="service-title">
        <h2 className="service-card-title">{title}</h2>
      </div>
      <div className="service-card-content">
        <p className="service-card-text">{text}</p>
        <button className="service-card-btn" onClick={onLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  </>
);

export default ourServiceCard;