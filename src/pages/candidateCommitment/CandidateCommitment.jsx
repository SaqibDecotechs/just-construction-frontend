import React from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import CandidateCommitmentDetails from '../../component/candidateCommitmentDetails/CandidateCommitmentDetails';
import CandidateNextStep from '../../component/candidateNextStep/CandidateNextStep';
import LatestOpportunities from '../../component/latestOpportunities/LatestOpportunities';
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
            <h2 className="candidate-hero-subtitle">Our priority is to always protect and serve your best interests</h2>
            <p className="candidate-hero-description">
              Our recruitment team works tirelessly to connect you with the perfect role. We believe in honesty and integrity, guiding you toward the opportunity you’ve been searching for.
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
            As specialists in construction, we have a deep understanding of the challenges that can arise throughout the process
          </h2>
          <p className="candidate-second-description">
            We’ll partner with you to plan your career journey, guiding you toward the right role with the right organisation
          </p>
        </div>
      </div>

      <CandidateCommitmentDetails />

      <CandidateNextStep />

      <LatestOpportunities withBorder={false} />



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