import React from 'react';
import './salaryGuide.css';
import Button from '../button';

const SalaryGuide = () => {
  return (
    <section className="salary-guide">
      <div className="salary-guide-container">
        <div className="salary-guide-content">
          
          {/* Title */}
          <h2 className="salary-guide-title">2025 US SALARY GUIDE</h2>
          
          {/* Description */}
          <p className="salary-guide-description">
            Download the 2025 Salary Guide for the latest insights on salaries within the Construction 
            Sector and get a forecast of the industry's performance.
          </p>
          
          {/* Salary Guide Image */}
          <div className="salary-guide-image-container">
            <img 
              src="https://lirp.cdn-website.com/2cce4485/dms3rep/multi/opt/Salary-Guide---Front-Page--1920w.png" 
              alt="2025 Salary Guide Cover" 
              className="salary-guide-image"
            />
          </div>
          
          {/* Download Button */}
          <div className="salary-guide-button-container">
            <Button text={"Download Salary Guide"} />
            {/* <button className="download-salary-btn">Download Salary Guide</button> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SalaryGuide;