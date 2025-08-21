import React, { useState, useEffect } from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import JobCard from '../../component/jobCard/JobCard';
import { FaChevronDown } from 'react-icons/fa';
import { getAllJobs } from '../../store/services/jobs';
import './allJobs.css';

const AllJobs = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ANY');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllJobs();
        console.log("🚀 ~ fetchJobs ~ response:", response)
        if (response && response.data) {
          setJobs(response.data.jobs);
          setFilteredJobs(response.data);
        } else {
          setJobs([]);
          setFilteredJobs([]);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs. Please try again later.');
        setJobs([]);
        setFilteredJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search criteria
  const filterJobs = (keyword, category) => {
    let filtered = [...jobs];

    // Filter by keyword (job title, location, or description)
    if (keyword && keyword.trim()) {
      const searchTerm = keyword.toLowerCase().trim();
      filtered = filtered.filter(job => 
        job.title?.toLowerCase().includes(searchTerm) ||
        job.location?.toLowerCase().includes(searchTerm) ||
        job.description?.toLowerCase().includes(searchTerm) ||
        job.company?.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    if (category && category !== 'ANY') {
      filtered = filtered.filter(job => 
        job.industry === category || 
        job.category === category
      );
    }

    setFilteredJobs(filtered);
  };

  const handleSearch = () => {
    filterJobs(searchKeyword, selectedCategory);
  };

  // Update filtered jobs when search inputs change
  useEffect(() => {
    filterJobs(searchKeyword, selectedCategory);
  }, [searchKeyword, selectedCategory, jobs]);

  const jobCategories = [
    'ANY',
    'M&E & Building Services',
    'Building Envelopes',
    'Construction',
    'Interiors'
  ];

  return (
    <div className="all-jobs-page">
      {/* Navbar Component */}
      <NavbarHero />
      
      {/* Hero Section */}
      <div className="all-jobs-hero">
        <div className="hero-overlay hero-overlay-jobs">
          <h1 className="hero-title">Job Results</h1>
          
          <div className="search-container">
            <div className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="KEYWORD OR LOCATION"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              
              <div className="select-container">
                <select
                  className="category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="select-arrow" />
              </div>
              
              <button className="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Jobs Display Section */}
      <div className="jobs-display-section">
        <div className="jobs-container">
          <div className="jobs-header">
            <h2>Available Positions</h2>
            <p>{loading ? 'Loading...' : `${filteredJobs.length} jobs found`}</p>
          </div>

          {loading && (
            <div className="jobs-loading">
              <div className="loading-spinner"></div>
              <p>Loading job opportunities...</p>
            </div>
          )}

          {error && (
            <div className="jobs-error">
              <p>{error}</p>
              <button 
                className="retry-button" 
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && filteredJobs.length === 0 && (
            <div className="no-jobs">
              <p>No jobs found matching your criteria.</p>
              <p>Try adjusting your search filters.</p>
            </div>
          )}

          {!loading && !error && filteredJobs.length > 0 && (
            <div className="jobs-grid">
              {filteredJobs.map((job) => (
                <JobCard key={job._id || job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AllJobs;