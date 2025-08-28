import React, { useState } from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './submitCV.css';

const SubmitCV = () => {
  // Job data from the image
  const jobsData = [
    {
      id: 1,
      location: "Greater London",
      country: "United Kingdom",
      title: "Project Manager",
      category: "Interiors",
      salary: "£ 65,000 - 70,000 GBP"
    },
    {
      id: 2,
      location: "Greater London",
      country: "United Kingdom", 
      title: "Project Manager",
      category: "Interiors",
      salary: "£ 65,000 - 70,000 GBP"
    },
    {
      id: 3,
      location: "East Sussex",
      country: "United Kingdom",
      title: "Assistant QS/QS/Senior QS",
      category: "Interiors",
      salary: "£ 30,000 - 60,000 GBP"
    },
    {
      id: 4,
      location: "Greater London",
      country: "United Kingdom",
      title: "Senior Project Manager",
      category: "Construction",
      salary: "£ 70,000 - 85,000 GBP"
    },
    {
      id: 5,
      location: "Manchester",
      country: "United Kingdom",
      title: "Site Manager",
      category: "Construction",
      salary: "£ 45,000 - 55,000 GBP"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const jobsPerSlide = 3;
  const totalSlides = Math.ceil(jobsData.length / jobsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <NavbarHero />
      
      <div className="submit-cv-hero">
        <div className="submit-cv-hero-container">
          <div className="submit-cv-hero-content">
            <h1 className="submit-cv-hero-title">Submit your CV</h1>
            <h2 className="submit-cv-hero-subtitle">We do have new vacancies that may meet your search criteria that are not yet on our website.</h2>
            <p className="submit-cv-hero-description">
              Please upload your CV and one of our consultants will contact you to discuss roles that may be suitable.
            </p>
          </div>
        </div>
        
        <div className="submit-cv-hero-arrow">
          <MdKeyboardArrowDown />
        </div>
      </div>

      <div className="submit-cv-form-section">
        <div className="submit-cv-form-container">
          <div className="submit-cv-form-card">
            <h2 className="submit-cv-form-title">SUBMIT YOUR CV</h2>
            
            <form className="submit-cv-form">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Name:" required />
              </div>
              
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Email:" required />
              </div>
              
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Phone:" />
              </div>
              
              <div className="form-group">
                <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title (Required):" required />
              </div>
              
              <div className="form-group">
                <select id="county" name="county" required>
                  <option value="">County (Required):</option>
                  <option value="london">London</option>
                  <option value="manchester">Manchester</option>
                  <option value="birmingham">Birmingham</option>
                  <option value="glasgow">Glasgow</option>
                  <option value="liverpool">Liverpool</option>
                  <option value="bristol">Bristol</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <input type="text" id="address" name="address" placeholder="Address" />
              </div>
              
              <div className="form-group">
                <input type="text" id="postcode" name="postcode" placeholder="Postcode (Required):" required />
              </div>
              
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Message:"
                ></textarea>
              </div>
              
              <div className="form-group file-upload-group">
                <label className="file-upload-label">Choose File</label>
                <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
                <span className="file-upload-text">Upload File</span>
              </div>
              
              <div className="checkbox-group">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">
                  I agree to <a href="#" className="terms-link">Privacy Policy</a> & <a href="#" className="terms-link">Terms & Conditions (Required)</a>
                </label>
              </div>
              
              <button type="submit" className="submit-cv-button">
                Submit CV
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Jobs Slider Section */}
      <div className="submit-cv-jobs-section">
        <div className="jobs-slider-container">
          <div className="jobs-slider-wrapper">
            <div 
              className="jobs-slider"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="jobs-slide">
                  {jobsData
                    .slice(slideIndex * jobsPerSlide, (slideIndex + 1) * jobsPerSlide)
                    .map((job) => (
                      <div key={job.id} className="job-slider-card">
                        <div className="job-card-header">
                          <p className="job-location-pink">{job.location}</p>
                          <p className="job-country">{job.country}</p>
                        </div>
                        <h3 className="job-slider-title">{job.title}</h3>
                        <p className="job-slider-category">{job.category}</p>
                        <p className="job-slider-salary">{job.salary}</p>
                        <button className="job-learn-more-btn">
                          Learn More
                        </button>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="jobs-slider-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          {/* See All Jobs Button */}
          <div className="see-all-jobs-container">
            <button className="see-all-jobs-btn">
              See all Jobs
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SubmitCV;