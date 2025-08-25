import React, { useState, useEffect } from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import JobCard from '../../component/jobCard/JobCard';
import { FaChevronDown } from 'react-icons/fa';
import { getAllJobs } from '../../store/services/jobs';
import './allJobs.css';

const AllJobs = () => {
   const jobsData = [
    {
      "_id": "68a70ee485e9ef3a0461a767",
      "jobTitle": "Manager",
      "location": "Canada",
      "industry": "Civil Engineering",
      "contactName": "admin",
      "contactEmail": "saqibraheem@decotechs.xyz",
      "contactPhone": "0932312341",
      "salary": "$500 - $700",
      "aboutClient": "about client",
      "aboutRole": "about role",
      "aboutCandidate": "about candidate",
      "lastDateToApply": "2025-08-29T00:00:00.000Z",
      "postedBy": {
        "_id": "68a58622021627888b67e8eb",
        "firstName": "saqib",
        "lastName": "raheem",
        "email": "saqibraheem@decotechs.xyz"
      },
      "isActive": true,
      "postedDate": "2025-08-21T12:19:48.289Z",
      "createdAt": "2025-08-21T12:19:48.289Z",
      "updatedAt": "2025-08-21T12:19:48.289Z",
      "__v": 0
    },
    {
      "_id": "68a5c48484f4c91278bc01ef",
      "jobTitle": "Senior Manager",
      "location": "UAE",
      "industry": "Construction",
      "contactName": "Admin",
      "contactEmail": "admin@gmail.com",
      "contactPhone": "+9293202323",
      "salary": "$300 - $800",
      "aboutClient": "Add Job Details",
      "aboutRole": "Role Discriptions",
      "aboutCandidate": "Cnsdidtae....",
      "lastDateToApply": "2025-08-28T00:00:00.000Z",
      "postedBy": {
        "_id": "68a58622021627888b67e8eb",
        "firstName": "saqib",
        "lastName": "raheem",
        "email": "saqibraheem@decotechs.xyz"
      },
      "isActive": true,
      "postedDate": "2025-08-20T12:50:12.152Z",
      "createdAt": "2025-08-20T12:50:12.152Z",
      "updatedAt": "2025-08-21T11:17:03.073Z",
      "__v": 0
    },
    {
      "_id": "68a599e909ef7fe44d8711d3",
      "jobTitle": "Frontend Developer",
      "location": "london",
      "industry": "Construction",
      "contactName": "saqib",
      "contactEmail": "saqib@gmail.com",
      "contactPhone": "+9293202323",
      "salary": "$200 - $400",
      "aboutClient": "My client is seeking a detail-oriented and experienced Quantity Surveyor to support the financial and contractual management of drylining housing projects. Based in the office with regular site visits, the successful candidate will be responsible for cost management, procurement, and contract administration to ensure project profitability and efficiency.",
      "aboutRole": "**Key Responsibilities**:\n\n- Prepare and manage project budgets, cost estimates, and financial forecasts.\n- \n- Conduct site visits to assess progress and verify completed work for valuations.\n- \n- Manage procurement and tendering processes for subcontractors and suppliers.\n- \n- Assess and process variations, claims, and change orders.\n- \n- Negotiate contracts and agreements with subcontractors and suppliers.\n- \n- Ensure compliance with contractual and legal requirements.\n- \n- Prepare and submit monthly valuations and final accounts.\n- Work closely with site teams, project managers, and clients to ensure smooth project delivery.\n- Identify and mitigate financial risks.\n- Maintain accurate records and documentation for auditing and reporting.\n**What We Offer:**\n\n- Competitive salary and benefits package.\n- \n- Office-based role with opportunities for site visits.\n- \n- If you are a motivated Quantity Surveyor looking for an exciting opportunity in the drylining sector, we would love to hear from you.\n- \n- Career development and training opportunities.\n- \n- Supportive and professional working environmen\n\nt.",
      "aboutCandidate": "**Required Skills & Experience**:\n\n- Proven experience as a Quantity Surveyor , preferably in the drylining or construction industry.\n- \n- Strong knowledge of cost management, contract administration, and procurement .\n- \n- Ability to read and interpret drawings, specifications, and contracts .\n- \n- Excellent analytical and numerical skills.\n- \n- Strong negotiation and communication skills.\n- \n- Proficiency in Microsoft Excel, cost estimating software, and financial reporting tools .\n- \n- Knowledge of JCT and NEC contracts (preferred).\n- \n- Full UK driving licence (for site visits).",
      "lastDateToApply": "2025-08-28T00:00:00.000Z",
      "postedBy": {
        "_id": "68a58622021627888b67e8eb",
        "firstName": "saqib",
        "lastName": "raheem",
        "email": "saqibraheem@decotechs.xyz"
      },
      "isActive": true,
      "postedDate": "2025-08-20T09:48:25.021Z",
      "createdAt": "2025-08-20T09:48:25.021Z",
      "updatedAt": "2025-08-20T09:48:25.021Z",
      "__v": 0
    }
  ]
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ANY');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [loading, setLoading] = useState(false);
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

    // fetchJobs();
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
  // useEffect(() => {
  //   filterJobs(searchKeyword, selectedCategory);
  // }, [searchKeyword, selectedCategory, jobs]);

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
              <path d="M12 16l-6-6h12l-6 6z" />
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