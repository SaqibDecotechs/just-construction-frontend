import React from 'react';
import './csrHeroSection.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectSelectedCountry } from '../../store/slices/countrySlice';

const CSRHeroSection = () => {

  const selectedCountry = useSelector(selectSelectedCountry);


  return (
    <section className="csr-hero">
      <div className="csr-hero-overlay"></div>

      <div className="csr-hero-content">
        <div className="csr-hero-text">
          <h1 className="csr-hero-title">
            Diversity and CSR
          </h1>
          <p className="csr-hero-description">
            {selectedCountry == "UK" ? "We have always aimed to build a workplace that is both inclusive and diverse. At The Fazil Group, our workforce stands as a testament to the value of diversity, creating a unique sense of community that we greatly treasure." :
              " We have always aimed to build a workplace that is both inclusive and diverse. At The Fazil Group, our workforce is a testament to the value of diversity, creating a unique sense of community that we truly cherish."}
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