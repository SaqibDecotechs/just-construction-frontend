import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaEdit, FaTrash, FaDownload, FaUpload, FaHeart, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { getUser, setUser } from '../../store/slices/authSlice';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import EditProfile from '../../component/editProfile/EditProfile';
import JobPost from '../../component/jobPost/JobPost';
import { privateAPI } from '../../config/constants';
import './dashboard.css';
import store from '../../store';

const Dashboard = () => {
  const user = useSelector(getUser);
  console.log("🚀 ~ Dashboard ~ user:", user)
  const [savedJobs, setSavedJobs] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [favouriteSearches, setFavouriteSearches] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showJobPost, setShowJobPost] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRemoveJob = (jobId) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  const handleViewApplication = (applicationId) => {
    console.log('Viewing application:', applicationId);
  };

  const handleToggleAlert = (searchId) => {
    setFavouriteSearches(favouriteSearches.map(search =>
      search.id === searchId
        ? { ...search, alertEnabled: !search.alertEnabled }
        : search
    ));
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleCancelEdit = () => {
    setShowEditProfile(false);
  };

  const handleSaveProfile = async (profileData) => {
    console.log('Profile saved:', profileData);
    setShowEditProfile(false);
  };

  const handleJobPost = () => {
    setShowJobPost(true);
  };

  const handleCancelJobPost = () => {
    setShowJobPost(false);
  };

  const handleSaveJobPost = async (jobData) => {
    console.log('Job posted:', jobData);
    setShowJobPost(false);
    setEditingJob(null);
    // Fetch updated jobs list after posting
    await fetchAllJobs();
  };

  // Fetch all jobs for admin
  const fetchAllJobs = async () => {
    try {
      setLoading(true);
      const response = await privateAPI.get('/job/all');
      if (response.data && response.data.data.jobs) {
        setAllJobs(response.data.data.jobs);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Edit job functionality
  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowJobPost(true);
  };

  // Delete job functionality
  const handleDeleteJob = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await privateAPI.delete(`/job/${jobId}`);
        toast.success('Job deleted successfully!');
        await fetchAllJobs();
      } catch (error) {
        console.error('Error deleting job:', error);
        toast.error('Error deleting job. Please try again.');
      }
    }
  };

  // Fetch jobs on component mount for admin users
  useEffect(() => {
    if (user?.role === 'admin') {
      fetchAllJobs();
    }

  }, [user]);
  useEffect(() => {
    getUserData()
  }, [])
  const getUserData = async () => {

    const response = await privateAPI.get('/auth/my-profile');
    if (response.data && response.data.data && response.data.data.user) {
      store.dispatch(setUser(response?.data?.data));
    }
  }

  if (showEditProfile) {
    return (
      <div className="dashboard-page">
        <NavBar />

        <div className="dashboard-hero">
          <div className="hero-overlay">
            <h1 className="hero-title">Edit Profile</h1>
            <div className="hero-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 16l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
        </div>

        <EditProfile
          onCancel={handleCancelEdit}
          onSave={handleSaveProfile}
        />
        <Footer />
      </div>
    );
  }

  if (showJobPost) {
    return (
      <div className="dashboard-page">
        <NavBar />

        <div className="dashboard-hero">
          <div className="hero-overlay">
            <h1 className="hero-title">Post a Job</h1>
            <div className="hero-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 16l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
        </div>

        <JobPost
          onCancel={handleCancelJobPost}
          onSave={handleSaveJobPost}
          editingJob={editingJob}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <NavBar />

      <div className="dashboard-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Dashboard</h1>
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-container">

          {/* Profile Section and Dashboard Cards Row */}
          <div className="dashboard-main-row">

            {/* Profile Section */}
            <div className="profile-section">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  {user?.uploadProfileImage ? (
                    <img
                      src={user.uploadProfileImage}
                      alt="Profile"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <FaUser />
                  )}
                </div>
              </div>

              <div className="profile-info">
                <h3>{user?.firstName ? `${user.firstName} ${user.lastName}` : user?.name || 'User Name'}</h3>

                <div className="resume-section">
                  <div className="resume-icon">📄</div>
                  <div className="resume-text">
                    <span className="resume-label">Resume:</span>
                    {user?.uploadResume ? (
                      <a
                        href={user.uploadResume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-link"
                      >
                        View Resume
                      </a>
                    ) : (
                      <span className="resume-status">No Resume Uploaded</span>
                    )}
                  </div>
                </div>

                <div className="profile-details">
                  <h4>My Details</h4>
                  <div className="detail-item">
                    <span className="detail-label">Email Address:</span>
                    <span className="detail-value">{user?.email || 'user@example.com'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{user?.phoneNumber || 'N/A'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Address:</span>
                    <span className="detail-value">{user?.address || '-'}</span>
                  </div>
                </div>

                <button className="edit-profile-btn" onClick={handleEditProfile}>
                  Edit Profile
                </button>

                {/* Admin Job Post Button */}
                {user?.role === 'admin' && (
                  <button className="job-post-btn" onClick={handleJobPost}>
                    Post a Job
                  </button>
                )}
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="dashboard-cards-section">

              {/* Saved Jobs Card */}
              {user?.role !== 'admin' && (
                <div className="dashboard-card saved-jobs-card">
                  <div className="card-header">
                    <h3>💗 Saved Jobs</h3>
                  </div>
                  <div className="card-content">
                    <div className="table-header">
                      <span>Job Title</span>
                      <span>Action</span>
                    </div>
                    <div className="table-body">
                      {savedJobs.length === 0 ? (
                        <div className="empty-state">No Saved Jobs Yet</div>
                      ) : (
                        savedJobs.map(job => (
                          <div key={job.id} className="table-row">
                            <span>{job.title}</span>
                            <div className="action-buttons">
                              <button onClick={() => handleRemoveJob(job.id)} className="remove-btn">
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Job Application Details Card */}
              {user?.role !== 'admin' && (

                <div className="dashboard-card job-applications-card">
                  <div className="card-header">
                    <h3>📄 Job Application Details</h3>
                  </div>
                  <div className="card-content">
                    <div className="table-header">
                      <span>Job Title</span>
                      <span>Application Date</span>
                    </div>
                    <div className="table-body">
                      {!user?.jobApplications || user.jobApplications.length === 0 ? (
                        <div className="empty-state">No Job Applications Yet</div>
                      ) : (
                        user.jobApplications.map((application, index) => (
                          <div key={application._id || index} className="table-row">
                            <span>
                              {application.jobId.jobTitle || 'Job Title Not Available'}
                            </span>
                            <span>
                              {application?.applicationId?.appliedAt
                                ? new Date(application?.applicationId?.appliedAt).toLocaleDateString('en-GB', {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric'
                                })
                                : application.appliedAt
                                  ? new Date(application.appliedAt).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                  })
                                  : 'Date Not Available'
                              }
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Favourite Searches/Job Alerts Card */}
              <div className="dashboard-card favourite-searches-card" style={{ display: "none" }}>
                <div className="card-header">
                  <h3>💗 Favourite Searches/Job Alerts</h3>
                </div>
                <div className="card-content">
                  <div className="table-header">
                    <span>Job Title</span>
                    <span>Send email alerts</span>
                  </div>
                  <div className="table-body">
                    {favouriteSearches.length === 0 ? (
                      <div className="empty-state">No Favourite Jobs Yet</div>
                    ) : (
                      favouriteSearches.map(search => (
                        <div key={search.id} className="table-row">
                          <span>{search.jobTitle}</span>
                          <div className="alert-toggle">
                            <input
                              type="checkbox"
                              checked={search.alertEnabled}
                              onChange={() => handleToggleAlert(search.id)}
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

            </div>
            {/* Admin Jobs Management Table */}
            {user?.role === 'admin' && (
              <div className="dashboard-bottom-row">
                <div className="dashboard-card admin-jobs-card">
                  <div className="card-header">
                    <h3>📋 All Posted Jobs</h3>
                  </div>
                  <div className="card-content">
                    <div className="admin-jobs-table">
                      <div className="table-header">
                        <span>Job Title</span>
                        <span>Location</span>
                        <span>Industry</span>
                        <span>Posted Date</span>
                        <span>Actions</span>
                      </div>
                      <div className="table-body">
                        {loading ? (
                          <div className="empty-state">Loading jobs...</div>
                        ) : allJobs?.length === 0 ? (
                          <div className="empty-state">No Jobs Posted Yet</div>
                        ) : (
                          allJobs?.map(job => (
                            <div key={job._id} className="table-row">
                              <span className="job-title-admin">{job.jobTitle}</span>
                              <span className="job-location">{job.location}</span>
                              <span className="job-industry">{job.industry}</span>
                              <span className="job-date">
                                {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A'}
                              </span>
                              <div className="action-buttons">
                                <button
                                  onClick={() => handleEditJob(job)}
                                  className="edit-btn"
                                  title="Edit Job"
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  onClick={() => handleDeleteJob(job._id)}
                                  className="delete-btn"
                                  title="Delete Job"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Bottom Row - Additional Cards (if needed) */}
          <div className="dashboard-bottom-row">
            {/* Add more cards here if needed */}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;