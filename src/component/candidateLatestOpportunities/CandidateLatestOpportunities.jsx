import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './candidateLatestOpportunities.css';

const CandidateLatestOpportunities = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample job data similar to what's shown in candidatefifth.png
  const opportunities = [
    {
      _id: '1',
      location: 'Greater London',
      country: 'United Kingdom',
      jobTitle: 'Project Manager',
      industry: 'Interiors',
      salary: '£ 65,000 - 70,000 GBP'
    },
    {
      _id: '2',
      location: 'East Sussex',
      country: 'United Kingdom',
      jobTitle: 'Assistant QS/QS/Senior QS',
      industry: 'Interiors',
      salary: '£ 30,000 - 60,000 GBP'
    },
    {
      _id: '3',
      location: 'Surrey',
      country: 'United Kingdom',
      jobTitle: 'Roofing Junior Contracts Manager',
      industry: 'Building Envelopes',
      salary: '£ 40,000 - 50,000 GBP'
    },
    {
      _id: '4',
      location: 'Manchester',
      country: 'United Kingdom',
      jobTitle: 'Site Manager',
      industry: 'Construction',
      salary: '£ 50,000 - 60,000 GBP'
    },
    {
      _id: '5',
      location: 'Birmingham',
      country: 'United Kingdom',
      jobTitle: 'Mechanical Engineer',
      industry: 'M&E & Building Services',
      salary: '£ 45,000 - 55,000 GBP'
    },
    {
      _id: '6',
      location: 'Leeds',
      country: 'United Kingdom',
      jobTitle: 'Quantity Surveyor',
      industry: 'Construction',
      salary: '£ 35,000 - 45,000 GBP'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(opportunities.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(opportunities.length / 3)) % Math.ceil(opportunities.length / 3));
  };

  const handleLearnMore = (jobId) => {
    navigate(`/job/${jobId}/apply`);
  };

  const handleSeeAllJobs = () => {
    navigate('/all-jobs');
  };

  useEffect(() => {
    if (opportunities.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [opportunities]);

  return (
    <section className="candidate-latest-opportunities">
      <div className="candidate-opportunities-container">
        <div className="candidate-opportunities-header">
          <h2 className="candidate-opportunities-title">LATEST OPPORTUNITIES</h2>
        </div>
        
        <div className="candidate-opportunities-carousel">
          <div 
            className="candidate-opportunities-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Math.ceil(opportunities.length / 3) > 0 && (
              [...Array(Math.ceil(opportunities.length / 3))].map((_, slideIndex) => (
                <div key={slideIndex} className="candidate-opportunities-slide">
                  {opportunities.slice(slideIndex * 3, (slideIndex * 3) + 3).map((opportunity) => (
                    <div key={opportunity._id} className="candidate-opportunity-card">
                      <div className="candidate-opportunity-location-tag">
                        <span className="candidate-opportunity-location">{opportunity.location}</span>
                        <span className="candidate-opportunity-country">{opportunity.country}</span>
                      </div>
                      
                      <h3 className="candidate-opportunity-title">{opportunity.jobTitle}</h3>
                      <p className="candidate-opportunity-category">{opportunity.industry}</p>
                      
                      <div className="candidate-opportunity-salary">
                        <span className="candidate-salary-range">{opportunity.salary}</span>
                      </div>
                      
                      <button 
                        className="candidate-opportunity-btn"
                        onClick={() => handleLearnMore(opportunity._id)}
                      >
                        Learn More &#8250;
                      </button>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="candidate-carousel-indicators">
          {[...Array(Math.ceil(opportunities.length / 3))].map((_, index) => (
            <button
              key={index}
              className={`candidate-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <div className="candidate-see-all-container">
          <button 
            className="candidate-see-all-btn"
            onClick={handleSeeAllJobs}
          >
            See all Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CandidateLatestOpportunities;