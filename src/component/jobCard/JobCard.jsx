import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { saveJob, applyForJob } from '../../store/services/jobs';
import './jobCard.css';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  // Check if user has already applied to this job
  const hasUserApplied = () => {
    if (!user?.jobApplications || !job) return false;
    
    const jobId = job._id || job.id;
    return user.jobApplications.some(application => {
      const applicationJobId = application.jobId?._id || application.jobId;
      return applicationJobId === jobId;
    });
  };
  
  const formatSalary = (minSalary, maxSalary) => {
    if (minSalary && maxSalary) {
      return `£${minSalary.toLocaleString()} - £${maxSalary.toLocaleString()}`;
    } else if (minSalary) {
      return `£${minSalary.toLocaleString()}+`;
    } else if (maxSalary) {
      return `Up to £${maxSalary.toLocaleString()}`;
    }
    return 'Competitive Salary';
  };

  const getTimeAgo = (postedDate) => {
    if (!postedDate) return 'Recently posted';
    
    const now = new Date();
    const posted = new Date(postedDate || job.createdAt || job.datePosted);
    const diffInDays = Math.floor((now - posted) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Posted today';
    if (diffInDays === 1) return 'Posted 1 day ago';
    return `Posted ${diffInDays} days ago`;
  };

  const handleSaveJob = async () => {
    try {
      const jobId = job._id || job.id;
      // await saveJob(jobId);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Job Inquiry: ${job.title}`);
    const body = encodeURIComponent(`I am interested in the ${job.title} position at ${job.company || 'your company'}. Please provide more details.`);
    // window.open(`mailto:hr@company.com?subject=${subject}&body=${body}`);
  };

  const handleApplyNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    const jobId = job._id || job.id;
    navigate(`/job/${jobId}/apply`, { state: { job } });
  };

  const handleReadMore = () => {
    // Navigate to job details page
    const jobId = job._id || job.id;
    window.open(`/job/${jobId}`, '_blank');
  };

  return (
    <div className="job-card-container">
      <div className="job-card-header">
        <span className="job-posted-time">{getTimeAgo(job.createdAt)}</span>
        <div className="job-actions-links">
          <button className="action-link" onClick={handleSaveJob}>
            save job
          </button>
          <span className="action-separator">|</span>
          <button className="action-link" onClick={handleSendEmail}>
            send email
          </button>
        </div>
      </div>

      <h3 className="job-title">{job.jobTitle || 'Job Title Not Available'}</h3>

      <div className="job-details">
        <p className="job-location">{job.location || 'Location Not Specified'}</p>
        <p className="job-salary">{job.salary}</p>
        {/* <p className="job-salary">{formatSalary(job.minSalary || job.salary?.min, job.maxSalary || job.salary?.max)}</p> */}
        <p className="job-category">{job.category || job.industry || job.jobType || 'General'}</p>
      </div>

      <div className="job-card-actions">
        <button 
          className={`btn-apply-now ${hasUserApplied() ? 'btn-applied' : ''}`}
          onClick={hasUserApplied() ? undefined : handleApplyNow}
          disabled={hasUserApplied()}
        >
          {hasUserApplied() ? 'APPLIED' : 'APPLY NOW'} 
        </button>
        {/* <button className="btn-read-more" onClick={handleReadMore}>
          READ MORE
        </button> */}
      </div>
    </div>
  );
};

export default JobCard;