import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './latestOpportunities.css';
import Button from '../button';
import { privateAPI } from '../../config/constants';
import { jobsData } from '../../data/jobsdata';


const LatestOpportunities = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from API
 const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await privateAPI.get('/job/all');
      if (response.data && response.data.data.jobs) {
        let jobs = response.data.data.jobs;

        // 🔹 Oldest jobs first
        jobs = jobs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

        // 🔹 sirf 6 dikhani hain
        setOpportunities(jobs.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching jobs, using dummy data:', error);

      // 🔹 Fallback dummy data
      let jobs = jobsData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setOpportunities(jobs.slice(0, 6));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);



  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(opportunities.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(opportunities.length / 3)) % Math.ceil(opportunities.length / 3));
  };

  const handleLearnMore = () => {
    navigate('/all-jobs');
  };

  const handleSeeAllJobs = () => {
    navigate('/all-jobs');
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (opportunities.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [opportunities]);

  const getVisibleOpportunities = () => {
    const itemsPerSlide = 3;
    const start = currentSlide * itemsPerSlide;
    return opportunities.slice(start, start + itemsPerSlide);
  };

  if (loading) {
    return (
      <section className="latest-opportunities">
        <div className="opportunities-container">
          <div className="opportunities__header">
            <h2 className="opportunities__title">LATEST OPPORTUNITIES</h2>
          </div>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            Loading opportunities...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="latest-opportunities">
      <div className="opportunities-container">
        <div className="opportunities__header">
          <h2 className="opportunities__title">LATEST OPPORTUNITIES</h2>
        </div>

        {opportunities.length > 0 ? (
          <>
            <div className="opportunities__carousel">
              <div
                className="opportunities__track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Math.ceil(opportunities.length / 3) > 0 && (
                  [...Array(Math.ceil(opportunities.length / 3))].map((_, slideIndex) => (
                    <div key={slideIndex} className="opportunities__slide">
                      {opportunities.slice(slideIndex * 3, (slideIndex * 3) + 3).map((opportunity) => (
                        <div key={opportunity._id} className="opportunity__card">
                          <div className="opportunity__location-tag">
                            {opportunity.location || 'Location Not Available'}
                            <div className="opportunity__country">United States</div>
                          </div>

                          <h3 className="opportunity__title">{opportunity.jobTitle || 'Job Title Not Available'}</h3>
                          <p className="opportunity__category">{opportunity.industry || opportunity.category || 'General'}</p>

                          <div className="opportunity__salary">
                            <span className="salary__min">{opportunity.salary || 'Competitive Salary'}</span>
                          </div>

                          <button
                            className="opportunity__btn"
                            onClick={handleLearnMore}
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

            <div className="carousel-indicators">
              {[...Array(Math.ceil(opportunities.length / 3))].map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            No opportunities available at the moment.
          </div>
        )}

        <div className="see-all-container">
          <div onClick={handleSeeAllJobs} style={{ cursor: 'pointer' }}>
            <Button text={"See All Jobs"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestOpportunities;