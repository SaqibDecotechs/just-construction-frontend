import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCountry } from '../../store/slices/countrySlice';
import './marketSectors.css';
import about1 from '../../assest/about1.jpg';
import about2 from '../../assest/about2.jpg';
import about3 from '../../assest/about3.jpg';
import about4 from '../../assest/about4.jpg';
import market1 from '../../assest/ms1.avif';
import market2 from '../../assest/ms2.avif';
import market3 from '../../assest/ms3.avif';
import market4 from '../../assest/ms4.avif';
import market5 from '../../assest/ms5.avif';
import market6 from '../../assest/ms6.avif'; 

const MarketSectors = () => {
  const selectedCountry = useSelector(selectSelectedCountry);

  const usaSectors = [
    {
      id: 1,
      title: 'COMMERCIAL',
      image: market1
    },
    {
      id: 2,
      title: 'RESIDENTIAL',
      image: market2  
    },
    {
      id: 3,
      title: 'INDUSTRIAL',
      image: market3
    },
    {
      id: 4,
      title: 'EDUCATION',
      image: market4
    },
    {
      id: 5,
      title: 'INFRASTRUCTURE',
      image: market5
    },
    {
      id: 6,
      title: 'HEALTHCARE',
      image: market6
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
    <section className="market-sectors">
      <div className="market-container">
        <div className="market-sectors__header">
          <h2 className="market-sectors__title">INDUSTRY SECTORS</h2>
          <p className="market-sectors__subtitle">Our specialist teams provide dedicated expertise across the following areas of the construction industry:</p>
        </div>
        <div className={`market-sectors__grid ${sectors.length === 4 ? 'grid-4' : 'grid-6'}`}>
          {sectors.map((sector) => (
            <div key={sector.id} className="market-sector__card">
              <div className="market-sector__image-container">
                <img src={sector.image} alt={sector.title} className="market-sector__image" />
                <div className="market-sector__overlay">
                  <h3 className="market-sector__title">{sector.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSectors;