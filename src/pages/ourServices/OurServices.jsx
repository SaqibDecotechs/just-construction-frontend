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
            title="RECRUIT+"
            text="Recruit+ offers a subscription-based recruitment model tailored for construction firms. With a fixed monthly fee, you gain predictable costs, end-to-end hiring support, dedicated account management, and retention strategies — making recruitment streamlined, cost-effective, and scalable."
            showButton={false}
          />

          <OurServiceCard
            title="RETAINED"
            text="Our Retained Search gives you two tiered options to choose the level of resource dedicated to your hiring. It’s a tailored, service-led solution ideal for senior or specialist roles, offering high commitment, discounts on multiple vacancies, and peace of mind with guarantee periods — ensuring we find you the right person to make an impact from day one."
            showButton={false}
          />

          <OurServiceCard
            title="CONTINGENT"
            text="Our Contingent model means you only pay when we successfully fill your role. It’s ideal for frequent or less specialist positions, offering flexibility, discounted rates for multiple placements, and peace of mind with guarantee periods — giving you a cost-effective way to scale your team."
            showButton={false}
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