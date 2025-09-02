import React, { useState } from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './jobAlerts.css';

const JobAlerts = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [salaryValue, setSalaryValue] = useState(183700);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSalaryChange = (e) => {
    setSalaryValue(parseInt(e.target.value));
  };

  const handleTermsChange = (e) => {
    setAgreeToTerms(e.target.checked);
  };

  return (
    <div className="job-alerts-page">
      <NavbarHero />
      
      <section className="job-alerts-hero">
        <div className="job-alerts-hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Job Alerts</h1>
            <h2 className="hero-subtitle">'The early bird catches the worm'</h2>
            <p className="hero-description">
              A very true statement when it comes to the levels of competition seen for vacancies in the current market.
              <br />
              Why not let the jobs come to you? Sign up below to job alerts you want to see as soon as we receive them.
            </p>
          </div>
        </div>
        
        <div className="job-alerts-hero-arrow">
          <MdKeyboardArrowDown />
        </div>
      </section>
      
      
      <section className="job-alerts-form-section">
        <div className="form-container">
          <div className="form-wrapper">
            
            {/* Login Section */}
            <div className="login-section">
              <p className="login-message">
                If you already have an account - Welcome back! Please login to manage your job alerts and keep track of your saved jobs.
              </p>
              
              <button className="google-signin-btn">
                <FcGoogle className="google-icon" />
                Sign in with Google
              </button>
              
              <div className="or-divider">
                <button className="login-link-btn">or you can log-in here</button>
              </div>
            </div>

            {/* Registration Form */}
            <div className="registration-section">
              <h2 className="form-title">Create Job Alerts & Register</h2>
              
              <form className="job-alert-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-input-wrapper">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Alert Details Section */}
                <h3 className="section-title">Alert Details</h3>
                
                <div className="form-group full-width">
                  <label htmlFor="alertName">Alert Name:</label>
                  <input type="text" id="alertName" name="alertName" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="keywords">Alert Keywords:</label>
                    <input type="text" id="keywords" name="keywords" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="workType">Work Type:</label>
                    <select id="workType" name="workType">
                      <option value="">All Work Types</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="temporary">Temporary</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row location-row">
                  <div className="form-group location-input">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" />
                  </div>
                  <div className="form-group radius-input">
                    <label htmlFor="radius">Radius:</label>
                    <select id="radius" name="radius">
                      <option value="">Radius</option>
                      {/* <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option> */}
                    </select>
                  </div>
                  <div className="form-group radius-unit">
                    <label htmlFor="radiusUnit">km / mi</label>
                    <select id="radiusUnit" name="radiusUnit">
                      <option value="km">km</option>
                      <option value="mi">mi</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="profession">Profession:</label>
                  <select id="profession" name="profession">
                    <option value="">All Professions</option>
                    <option value="construction">Construction</option>
                    <option value="engineering">Engineering</option>
                    <option value="architecture">Architecture</option>
                    <option value="project-management">Project Management</option>
                    <option value="building-services">Building Services</option>
                    <option value="interiors">Interiors</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="salary">Salary:</label>
                  <div className="salary-slider-wrapper">
                    <input 
                      type="range" 
                      id="salary" 
                      name="salary" 
                      min="20000" 
                      max="1000000" 
                      step="1000"
                      value={salaryValue}
                      onChange={handleSalaryChange}
                      className="salary-slider"
                    />
                    <div className="salary-range-display">
                      ${salaryValue.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="terms-section">
                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id="agreeToTerms" 
                      name="agreeToTerms"
                      checked={agreeToTerms}
                      onChange={handleTermsChange}
                      className="agreement-checkbox"
                    />
                    <label htmlFor="agreeToTerms" className="agreement-label">
                      I agree to the terms of this site
                    </label>
                  </div>
                  <div className="privacy-policy-link">
                    <a href="#" className="privacy-link">Read our Privacy Policy</a>
                  </div>
                </div>
                
                <div className="button-section">
                  <button type="submit" className="register-btn">Register and Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JobAlerts;