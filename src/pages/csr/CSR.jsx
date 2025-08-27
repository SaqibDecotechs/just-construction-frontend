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
            <h2 className="diversity-title">OUR DIVERSITY COMMITMENT</h2>
            <h3 className="diversity-subtitle">We are committed to building a team that represents a diversity of thought, experience and background.</h3>
            <p className="diversity-description">
              We recently reviewed our D&I efforts and have put in place clear strategic targets to work towards.
            </p>
            <p className="diversity-description">
              We don't want to be just pumping out the usual platitudes. This is about making meaningful change to our business, 
              and the businesses we work with. We have set strategic D&I goals across the business and have put a number of key 
              initiatives in place to help us achieve them. They are:
            </p>
          </div>
        </div>
      </div>

      <div className="csr-diversity-commitment">
        <div className="csr-diversity-commitment-container">
          <div className="placement-card">
            <h2 className="placement-title">ACROSS THE JUST GROUP OUR PLACEMENTS IN 2021 WERE MADE UP OF:</h2>
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
                src={goalsImage} 
                alt="Diversity Goals" 
                className="goals-image"
              />
            </div>
            <div className="diversity-goals-content">
              <h2 className="diversity-goals-title">OUR DIVERSITY GOALS</h2>
              <ul className="diversity-goals-list">
                <li className="diversity-goal-item">
                  Our global management team to reflect the racial/ethnic diversity of our respective local communities. By 2024.
                </li>
                <li className="diversity-goal-item">
                  A 50/50 gender balance and racial/ethnic diversity across the business that is reflective of our local communities. By end of 2022
                </li>
                <li className="diversity-goal-item">
                  Our candidates placed to be consistently diverse (gender) and racially/ethnically representative of our clients' local communities. Always!
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
              <h2 className="achieve-goals-title">HOW WE ACHIEVE OUR GOALS</h2>
              <ul className="achieve-goals-list">
                <li className="achieve-goal-item">
                  Creation of a Diversity Counsel to continually measure effectiveness
                </li>
                <li className="achieve-goal-item">
                  Talent team targeted against ensure we have a diverse pipeline of candidates through specific resourcing and targeting
                </li>
                <li className="achieve-goal-item">
                  D&I to be more prominent in all staff engagement forums and specific targets in place across the management team Talent team tasked with hitting and coordinating
                </li>
                <li className="achieve-goal-item">
                  Partnering with specialist external suppliers to ensure ongoing best practice (e.g. Growing Happy)
                </li>
                <li className="achieve-goal-item">
                  Defaulting to no-named shortlists for all client vacancies
                </li>
              </ul>
              <button className="diversity-policy-btn">Diversity Policy</button>
            </div>
            <div className="achieve-goals-image">
              <img 
                src={achieveGoalsImage} 
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