import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCountry } from '../../store/slices/countrySlice';
import './Marketservices.css';
import about1 from '../../assest/about1.jpg';
import about2 from '../../assest/about2.jpg';
import about3 from '../../assest/about3.jpg';
import about4 from '../../assest/about4.jpg';
import aboutus1 from '../../assest/aboutus1.jpg';
import aboutus2 from '../../assest/aboutus2.jpg';
import aboutus3 from '../../assest/aboutus3.jpg';
import aboutus4 from '../../assest/aboutus4.jpg';
import aboutus5 from '../../assest/aboutus5.jpg';

const MarketServices = () => {
  const selectedCountry = useSelector(selectSelectedCountry);

  const usaSectors = [
    {
      id: 1,
      title: 'Drywall Recruitment ',
      image: aboutus1
    },
    {
      id: 2,
      title: 'Glazing Recruitment',
      image: aboutus2
    },
    {
      id: 3,
      title: 'M&E and HVAC Recruitment',
      image: aboutus3
    },
    {
      id: 4,
      title: 'General Contracting Recruitment',
      image: aboutus4
    },
    {
      id: 5,
      title: 'Roofing Recruitment',
      image: aboutus5
    },
  ];
  const ukSectors = [
   
    {
      id: 1,
      title: 'Building Envelopes',
      image: about1
    },
    {
      id: 2,
      title: 'Construction & Civils',
      image: about2
    },
    {
      id: 3,
      title: 'Interior Fit Out & Refurbishment',
      image: about3
    },
    {
      id: 4,
      title: 'M&E & Building Services',
      image: about4
    },
  ];

  const sectors = selectedCountry === 'US' ? usaSectors : ukSectors;

  return (
    <section className="market-services">
      <div className="market-container-services">
        <div className="market-services__header">
          <h2 className="market__title">MARKET SERVICES COVERED</h2>
        </div>
        <div className={`market-services__grid ${sectors.length === 4 ? 'grid-4' : 'grid-5'}`}>
          {sectors.map((sector) => (
            <div key={sector.id} className="market-services__card">
              <div className="market-services__image-container">
                <img src={sector.image} alt={sector.title} className="market-services__image" />
                <div className="market-services__overlay">
                  <h3 className="market-services__title">{sector.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketServices;