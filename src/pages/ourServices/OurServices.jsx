import React from 'react';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import OurServiceCard from '../../component/ourServices/OurServicesCard';
import './OurServices.css';
import download from '../../assest/download.webp';
import CaseStudiesSlider from '../../component/caseStudies/CaseStudiesSlider';

const OurServicesPage = () => {
  return (
    <div className="ourservices-page">
      <NavBar />

      <div className="ourservices-hero">
        <div className="hero-overlay hero-overlay-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            We partner with companies in UK, Europe and The US to provide a full range of talent solutions for all Construction markets.
          </p>
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="ourservices-content container">
        <h1>Whether you need a single employee or an entire project team, we have the skills and expertise to deliver.</h1>

        <h1 className="service-cards-heading">Our Services</h1>
        <div className="service-cards-row">
          <OurServiceCard
            title="CONTINGENT"
            text="Contingent means that you will only ever pay us a fee when we successfully find you the candidate for the role. The fee is contingent on our success."
            onLearnMore={() => alert('Permanent Staffing')}
          />
          <OurServiceCard
            title="RETAINED"
            text="Determine the amount of additional resources dedicated to your search with two tiers of service, based on a percentage of the upfront cost."
            onLearnMore={() => alert('Contract Staffing')}
          />
          <OurServiceCard
            title="JUST RECRUIT+"
            text="A monthly subscription allows you to budget your recruitment spending better and significantly improves search focus, resources and value for money."
            onLearnMore={() => alert('Executive Search')}
          />
        </div>
      </div>

      <div className="download container">
        <h2 className='download-heading'>DOWNLOAD</h2>
        <div className="download-content">
          <a href="/download-center">
            <img
              src={download}
              alt="Download Center"
              className="download-image"
            />
          </a>
        </div>
      </div>

      <div className="case-studies-section">
        <CaseStudiesSlider />
      </div>

      <Footer />
    </div>
  )
}

export default OurServicesPage