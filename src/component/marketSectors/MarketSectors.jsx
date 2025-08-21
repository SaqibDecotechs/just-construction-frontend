import React from 'react';
import './marketSectors.css';

const MarketSectors = () => {
  const sectors = [
    {
      id: 1,
      title: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'INFRASTRUCTURE',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'INDUSTRIAL',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      title: 'HEALTHCARE',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      title: 'EDUCATION',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <section className="market-sectors">
      <div className="market-container">
        <div className="market-sectors__header">
          <h2 className="market-sectors__title">MARKET SECTORS</h2>
          <p className="market-sectors__subtitle">Our dedicated teams are specialists in the following markets within the construction sector:</p>
        </div>
        <div className="market-sectors__grid">
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