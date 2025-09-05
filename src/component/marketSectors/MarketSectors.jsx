import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCountry } from '../../store/slices/countrySlice';
import './marketSectors.css';
import about1 from '../../assest/about1.jpg';
import about2 from '../../assest/about2.jpg';
import about3 from '../../assest/about3.jpg';
import about4 from '../../assest/about4.jpg';

const MarketSectors = () => {
  const selectedCountry = useSelector(selectSelectedCountry);

  const usaSectors = [
    {
      id: 1,
      title: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'INDUSTRIAL',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'EDUCATION',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      title: 'INFRASTRUCTURE',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      title: 'HEALTHCARE',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
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