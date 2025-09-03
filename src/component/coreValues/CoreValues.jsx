import React from 'react';
import './coreValues.css';

const CoreValues = () => {
const values = [
  {
    id: 1,
    title: 'Trust',
    description:
      'Strong partnerships begin with trust. We provide open and straightforward advice, always putting your best interests first.',
    icon: '💡' // Replace with proper icon
  },
  {
    id: 2,
    title: 'Integrity',
    description:
      'We uphold the highest ethical standards, ensuring that every decision and action is guided by fairness and respect.',
    icon: '⚖️' // Replace with proper icon
  },
  {
    id: 3,
    title: 'Clarity',
    description:
      'We believe in complete transparency, keeping our clients and candidates fully informed at every stage of the process.',
    icon: '🌐' // Replace with proper icon
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