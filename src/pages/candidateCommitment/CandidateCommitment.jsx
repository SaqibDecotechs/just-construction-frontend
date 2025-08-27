import React from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import CandidateCommitmentDetails from '../../component/candidateCommitmentDetails/CandidateCommitmentDetails';
import CandidateNextStep from '../../component/candidateNextStep/CandidateNextStep';
import CandidateLatestOpportunities from '../../component/candidateLatestOpportunities/CandidateLatestOpportunities';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './candidateCommitment.css';

const CandidateCommitment = () => {
  return (
    <>
      <NavbarHero />
      
      <div className="candidate-commitment-hero">
        <div className="candidate-commitment-hero-container">
          <div className="candidate-hero-content">
            <h1 className="candidate-hero-title">Candidate commitment</h1>
            <h2 className="candidate-hero-subtitle">It is our job to always look out for your interests</h2>
            <p className="candidate-hero-description">
              OUR RECRUITMENT TEAM WORKS DILIGENTLY TO FIND YOU THAT PERFECT ROLE. WE BELIEVE IN 
              HONESTY AND INTEGRITY WHEN HELPING YOU TO FIND THAT MAGIC YOU CRAVE.
            </p>
          </div>
        </div>
        
        <div className="candidate-hero-arrow">
          <MdKeyboardArrowDown />
        </div>
      </div>

      <div className="candidate-second-section">
        <div className="candidate-second-container">
          <h2 className="candidate-second-title">
            As construction specialists, we truly understand the challenges 
            that can present themselves along the way.
          </h2>
          <p className="candidate-second-description">
            We will work with you to map out the career path you intend to take, helping you to find the right job 
            role with the right organisation.
          </p>
        </div>
      </div>

      <CandidateCommitmentDetails />

      <CandidateNextStep />

      <CandidateLatestOpportunities />

      {/* <div className="candidate-commitment-content">
        <div className="candidate-commitment-container">
          <div className="commitment-section">
            <h2 className="commitment-title">Our Promise to You</h2>
            <div className="commitment-grid">
              <div className="commitment-item">
                <h3>Honest Communication</h3>
                <p>We provide transparent feedback and honest advice throughout your job search journey.</p>
              </div>
              <div className="commitment-item">
                <h3>Personalized Service</h3>
                <p>Every candidate is unique, and we tailor our approach to match your individual career goals.</p>
              </div>
              <div className="commitment-item">
                <h3>Long-term Partnership</h3>
                <p>We're not just here for one placement - we're invested in your long-term career success.</p>
              </div>
              <div className="commitment-item">
                <h3>Industry Expertise</h3>
                <p>Our deep understanding of the construction industry helps us find the perfect role for you.</p>
              </div>
            </div>
          </div>

          <div className="commitment-section">
            <h2 className="commitment-title">What We Do For You</h2>
            <div className="commitment-list">
              <div className="commitment-list-item">
                <span className="commitment-bullet">•</span>
                <p>Thoroughly understand your career aspirations and personal circumstances</p>
              </div>
              <div className="commitment-list-item">
                <span className="commitment-bullet">•</span>
                <p>Present you with opportunities that align with your skills and goals</p>
              </div>
              <div className="commitment-list-item">
                <span className="commitment-bullet">•</span>
                <p>Provide comprehensive interview preparation and career guidance</p>
              </div>
              <div className="commitment-list-item">
                <span className="commitment-bullet">•</span>
                <p>Negotiate on your behalf to secure the best possible package</p>
              </div>
              <div className="commitment-list-item">
                <span className="commitment-bullet">•</span>
                <p>Support you through the entire recruitment process and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      <Footer />
    </>
  );
};

export default CandidateCommitment;