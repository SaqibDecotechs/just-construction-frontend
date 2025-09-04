import React from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import CSRHeroSection from '../../component/csrHero/CSRHeroSection';
import goalsImage from '../../assest/goalsbg.webp';
import achieveGoalsImage from '../../assest/achievegoalsbg.webp';

import './csr.css';

const CSR = () => {
  return (
    <>
      <NavbarHero />
      <CSRHeroSection />
      
      <div className="csr-diversity-commitment">
        <div className="csr-diversity-commitment-container">
          <div className="diversity-card">
            <h2 className="diversity-title">Committed to Diversity & Inclusion</h2>
            <h3 className="diversity-subtitle">Our commitment is to build a team that reflects diverse perspectives, experiences, and backgrounds.</h3>
            <p className="diversity-description">
             We have recently assessed our D&I initiatives and set clear strategic goals to guide our progress
            </p>
            <p className="diversity-description">
              We’re not here to offer the usual empty statements. Our focus is on driving meaningful change—within our business and the businesses we partner with. To achieve this, we’ve set clear D&I goals across the organisation and introduced a range of key initiatives to support them. These include:
            </p>
          </div>
        </div>
      </div>

      <div className="csr-diversity-commitment">
        <div className="csr-diversity-commitment-container">
          <div className="placement-card">
            <h2 className="placement-title">Breakdown of our 2021 placements at The Just Group</h2>
            <div className="placement-stats">
              <div className="stats-section">
                <div className="gender-stats">
                  <div className="stat-item">
                    <span className="stat-percentage">36%</span>
                    <span className="stat-label">Female</span>
                  </div>
                  <h3 className="stats-category">GENDER</h3>
                  <div className="stat-item">
                    <span className="stat-percentage">64%</span>
                    <span className="stat-label">Male</span>
                  </div>
                </div>
              </div>
              <div className="stats-section">
                <div className="ethnicity-stats">
                  <div className="ethnicity-content">
                    <div className="stat-item">
                      <span className="stat-percentage">10%</span>
                      <span className="stat-label">Black</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-percentage">60%</span>
                      <span className="stat-label">White</span>
                    </div>
                    <h3 className="stats-category">ETHNICITY</h3>
                    <div className="stat-item">
                      <span className="stat-percentage">27%</span>
                      <span className="stat-label">Asian</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-percentage">3%</span>
                      <span className="stat-label">Other</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="csr-diversity-commitment">
        <div className="csr-diversity-commitment-container">
          <div className="diversity-goals-card">
            <div className="diversity-goals-image">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_0cY-ZaP0he4D2_WudLE5QsCyO0fSVQ5lw&s" 
                alt="Diversity Goals" 
                className="goals-image"
              />
            </div>
            <div className="diversity-goals-content">
              <h2 className="diversity-goals-title">Shaping Tomorrow with Our Diversity Goals</h2>
              <ul className="diversity-goals-list">
                <li className="diversity-goal-item">
                  By 2024, our global management team will reflect the racial and ethnic diversity of the communities we operate in.
                </li>
                <li className="diversity-goal-item">
                  By the end of 2022, we aimed to achieve a 50/50 gender balance and racial/ethnic diversity across the business that reflects our local communities
                </li>
                <li className="diversity-goal-item">
                  We ensure that every candidate we place is consistently diverse—both in gender and racial/ethnic representation—reflecting our clients’ local communities. Always.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="csr-diversity-commitment">
        <div className="csr-diversity-commitment-container">
          <div className="achieve-goals-card">
            <div className="achieve-goals-content">
              <h2 className="achieve-goals-title">Our Approach to Achieving Goals</h2>
              <ul className="achieve-goals-list">
                <li className="achieve-goal-item">
                  Establishing a Diversity Council to continuously monitor and measure effectiveness.
                </li>
                <li className="achieve-goal-item">
                  Our talent team is focused on building a diverse candidate pipeline through targeted resourcing and recruitment strategies
                </li>
                <li className="achieve-goal-item">
                 We are making D&I a central focus in all staff engagement forums, with clear targets set across the management team. Our talent team is responsible for driving and coordinating these efforts
                </li>
                <li className="achieve-goal-item">
                  Collaborating with specialist external partners, such as Growing Happy, to ensure we maintain best practice.
                </li>
                <li className="achieve-goal-item">
                 Implementing no-name shortlists as the default for all client vacancies
                </li>
              </ul>
              <button className="diversity-policy-btn">Diversity Policy</button>
            </div>
            <div className="achieve-goals-image">
              <img 
                src="https://cdn.prod.website-files.com/62a6f26ea434500b4f20edb2/649c14460501283187b76493_corporate-communications.jpg" 
                alt="How We Achieve Our Goals" 
                className="achieve-goals-img"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CSR;