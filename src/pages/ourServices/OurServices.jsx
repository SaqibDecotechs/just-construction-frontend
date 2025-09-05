import React from 'react';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import OurServiceCard from '../../component/ourServices/OurServicesCard';
import './OurServices.css';
import download from '../../assest/download.webp';
import CaseStudiesSlider from '../../component/caseStudies/CaseStudiesSlider';
import { MdKeyboardArrowDown } from 'react-icons/md';
import MarketServices from '../../component/ourServices/Marketservices';

const OurServicesPage = () => {
  return (
    <div className="ourservices-page">
      <NavBar />

      <div className="ourservices-hero">
        <div className="hero-overlay hero-overlay-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            We collaborate with companies across the UK, Europe, and the US to deliver comprehensive talent solutions for every sector of the construction industry.
          </p>
          <div className="hero-arrow">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      <div className="ourservices-content container">
        <h1>We provide the skills and experience you need, whether you’re looking for one employee or an entire project team</h1>

        <h1 className="service-cards-heading">Our Services</h1>
        <div className="service-cards-row">
          <OurServiceCard
            title="JUST RECRUIT+"
            text="By choosing a monthly subscription, you streamline your recruitment spending and benefit from improved search precision, stronger resources, and better cost efficiency."
            onLearnMore={() => alert('Executive Search')}
          />
          <OurServiceCard
            title="RETAINED"
            text="With two tiered options, you decide how much extra resource is committed to your search, determined by a percentage of the initial cost"
            onLearnMore={() => alert('Contract Staffing')}
          />
          <OurServiceCard
            title="CONTINGENT"
            text="With a contingent model, you’re only charged when we deliver — the fee applies only if we successfully fill your vacancy."
            onLearnMore={() => alert('Permanent Staffing')}
          />
        </div>
      </div>

      {/* <div className="download container">
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
      </div> */}

      <div className="case-studies-section">
        <CaseStudiesSlider />
      </div>

      <div style={{ marginBottom: '60px' }}>
        <MarketServices />
      </div>

      <Footer />
    </div>
  )
}

export default OurServicesPage