import React from 'react';
import './csrHeroSection.css';
import csrImage from '../../assest/diversitybg.webp';
import { MdKeyboardArrowDown } from 'react-icons/md';

const CSRHeroSection = () => {
  return (
    <section className="csr-hero">
      <div className="csr-hero-image-container">
        <img 
          src={csrImage} 
          alt="Corporate Social Responsibility" 
          className="csr-hero-image"
        />
        <div className="csr-hero-overlay"></div>
      </div>
      
      <div className="csr-hero-content">
        <div className="csr-hero-text">
          <h1 className="csr-hero-title">
            Diversity and CSR
          </h1>
          <p className="csr-hero-description">
            We have always strived to create a fully inclusive and diverse working environment. Our workforce carries a 
            clear representation that at The Just Group we recognise the importance that diversity provides an 
            unparalleled community factor that we are proud of in our office.
          </p>
        </div>
      </div>
      
      <div className="csr-hero-arrow">
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
};

export default CSRHeroSection;