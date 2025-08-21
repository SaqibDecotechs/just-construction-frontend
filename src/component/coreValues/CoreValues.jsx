import React from 'react';
import './coreValues.css';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: 'HONESTY',
      description: 'To start a lasting relationship, honesty is an essential first step; so we will always offer you our honest advice and opinions, even if they are not commercially beneficial to us.',
      icon: '💪' // Will be replaced with proper icon styling
    },
    {
      id: 2,
      title: 'INTEGRITY',
      description: 'We believe in doing things the right way. So naturally, in being honest, your moral compass should be pointing in the right direction.',
      icon: '🤝' // Will be replaced with proper icon styling
    },
    {
      id: 3,
      title: 'TRANSPARENCY',
      description: 'Taking our clients and candidates on the journey with us has always been key to our success. We believe in a fully transparent service with no hidden agenda.',
      icon: '🔍' // Will be replaced with proper icon styling
    }
  ];

  return (
    <section className="core-values">
      <div className="values-container">
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">
                <div className="icon-circle">
                  {value.id === 3 && (
                    <img  src='https://irp.cdn-website.com/2cce4485/dms3rep/multi/The-just-group-why-work-with-us-transparency.svg'/>
                  )}
                  {value.id === 2 && (
                   <img src="https://irp.cdn-website.com/2cce4485/dms3rep/multi/The-just-group-why-work-with-us-integrity.svg" alt="" srcset="" />
                  )}
                  {value.id === 1 && (
                   <img src='https://irp.cdn-website.com/2cce4485/dms3rep/multi/The-just-group-why-work-with-us-honesty.svg'  />
                  )}
                </div>
              </div>
              
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;