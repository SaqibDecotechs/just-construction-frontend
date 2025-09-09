import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import { uploadSingleFile } from '../../utils/fileUpload';
import { privateAPI } from '../../config/constants';
import { toast } from 'react-toastify';
import './jobApplication.css';
import { getUser } from '../../store/slices/authSlice';

const JobApplication = () => {
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const jobData = location.state?.job;
  
  // Get logged-in user data from Redux store
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    resumeOption: 'existing',
    coverLetterOption: 'none',
    resumeFile: null,
    coverLetterFile: null
  });

  // File upload states
  const [uploadedResumeUrl, setUploadedResumeUrl] = useState('');
  const [uploadedCoverLetterUrl, setUploadedCoverLetterUrl] = useState('');
  const [loadingResume, setLoadingResume] = useState(false);
  const [loadingCoverLetter, setLoadingCoverLetter] = useState(false);
  const [submittingApplication, setSubmittingApplication] = useState(false);

  // Populate form with user data when component mounts
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || user.mobileNumber || '',
        // Set resume option based on whether user has one
        resumeOption: user.uploadResume ? 'existing' : 'upload',
        // Set cover letter option based on whether user has one
        coverLetterOption: user.uploadCoverLetter ? 'existing' : 'none'
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (!file) return;

    // Update form data with the file
    setFormData(prev => ({
      ...prev,
      [name]: file
    }));

    // Upload the file immediately
    try {
      const formData = new FormData();
      formData.append("storecsv", file);
      
      if (name === 'resumeFile') {
        setLoadingResume(true);
        const responseUrl = await uploadSingleFile(formData);
        if (responseUrl) {
          setUploadedResumeUrl(responseUrl);
          console.log('Resume uploaded successfully:', responseUrl);
        }
        setLoadingResume(false);
      } else if (name === 'coverLetterFile') {
        setLoadingCoverLetter(true);
        const responseUrl = await uploadSingleFile(formData);
        if (responseUrl) {
          setUploadedCoverLetterUrl(responseUrl);
          console.log('Cover letter uploaded successfully:', responseUrl);
        }
        setLoadingCoverLetter(false);
      }
    } catch (error) {
      console.error('File upload error:', error);
      if (name === 'resumeFile') setLoadingResume(false);
      else if (name === 'coverLetterFile') setLoadingCoverLetter(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    try {
      setSubmittingApplication(true);
      
      // Determine resume URL based on selection
      let resumeUrl = '';
      if (formData.resumeOption === 'existing') {
        resumeUrl = user?.uploadResume || '';
      } else if (formData.resumeOption === 'upload') {
        resumeUrl = uploadedResumeUrl || '';
      }
      
      // Check if resume is available when required
      if (formData.resumeOption === 'existing' && !user?.uploadResume) {
        toast.error('No existing resume found. Please upload a resume.');
        setSubmittingApplication(false);
        return;
      }
      
      if (formData.resumeOption === 'upload' && !uploadedResumeUrl) {
        toast.error('Please upload a resume before submitting.');
        setSubmittingApplication(false);
        return;
      }
      
      // Determine cover letter URL based on selection
      let coverLetterUrl = '';
      if (formData.coverLetterOption === 'existing') {
        coverLetterUrl = user?.uploadCoverLetter || '';
      } else if (formData.coverLetterOption === 'upload') {
        coverLetterUrl = uploadedCoverLetterUrl || '';
      }
      
      // Prepare API payload matching backend structure
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        resume: resumeUrl,
        coverLetter: coverLetterUrl
      };
      
      console.log('Submitting application:', payload);
      
      // Call the API
      const response = await privateAPI.post(`/job-application/${jobId}/apply`, payload);
      
      if (response.data) {
        toast.success('Application submitted successfully!');
        // Redirect to dashboard after successful submission
        //  getUser();
        navigate('/dashboard');
      }
      
    } catch (error) {
      console.error('Error submitting application:', error);
      const errorMessage = error?.response?.data?.message || 'Failed to submit application. Please try again.';
      toast.error(errorMessage);
    } finally {
      setSubmittingApplication(false);
    }
  };

  return (
    <div className="job-application-page">
      {/* Navbar Component */}
      <NavbarHero />
      
      
      {/* Hero Section */}
      <div className="job-application-hero">
        <div className="hero-overlay hero-overlay-application">
          <h1 className="hero-title">Job Application</h1>
          
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Main Application Form */}
      <div className="application-container">
        <div className="application-form-wrapper">
          <div className="welcome-message">
            <h1>Welcome back {user?.firstName || 'User'} {user?.lastName || ''}!</h1>
          </div>

          <div className="register-section">
            <h2>Register:</h2>
            
            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-row-apply">
                <div className="form-group-apply">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group-apply">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group-apply">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group-apply">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
             
             <div style={{display:'flex',gap:"10px"}}>
              {/* Resume Section */}
              <div className="file-upload-section">
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="resumeOption"
                      value="existing"
                      checked={formData.resumeOption === 'existing'}
                      onChange={() => handleRadioChange('resumeOption', 'existing')}
                    />
                    <span className="radio-text">Use existing Resume</span>
                  </label>
                  
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="resumeOption"
                      value="upload"
                      checked={formData.resumeOption === 'upload'}
                      onChange={() => handleRadioChange('resumeOption', 'upload')}
                    />
                    <span className="radio-text">Upload a Resume</span>
                  </label>
                </div>

                {formData.resumeOption === 'existing' && (
                  <div className="existing-file-display">
                    {user?.uploadResume ? (
                      <>
                        <span className="existing-file-text">Current Resume: </span>
                        <a href={user.uploadResume} target="_blank" rel="noopener noreferrer" className="existing-file-link">
                          View Resume
                        </a>
                      </>
                    ) : (
                      <span className="no-existing-file">No resume found. Please upload a resume.</span>
                    )}
                  </div>
                )}

                {formData.resumeOption === 'upload' && (
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      id="resumeFile"
                      name="resumeFile"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                      disabled={loadingResume}
                    />
                    <label htmlFor="resumeFile" className="file-button">
                      {loadingResume ? 'Uploading...' : 'Choose file'}
                    </label>
                    <span className="file-status">
                      {loadingResume 
                        ? 'Uploading resume...' 
                        : uploadedResumeUrl 
                          ? 'Resume uploaded successfully' 
                          : formData.resumeFile 
                            ? formData.resumeFile.name 
                            : 'No file chosen'
                      }
                    </span>
                    {uploadedResumeUrl && (
                      <a href={uploadedResumeUrl} target="_blank" rel="noopener noreferrer" className="uploaded-file-link">
                        View Uploaded Resume
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Cover Letter Section */}
              <div className="file-upload-section">
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coverLetterOption"
                      value="none"
                      checked={formData.coverLetterOption === 'none'}
                      onChange={() => handleRadioChange('coverLetterOption', 'none')}
                    />
                    <span className="radio-text">I don't have a Cover Letter</span>
                  </label>
                  
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coverLetterOption"
                      value="upload"
                      checked={formData.coverLetterOption === 'upload'}
                      onChange={() => handleRadioChange('coverLetterOption', 'upload')}
                    />
                    <span className="radio-text">Upload a Cover Letter</span>
                  </label>
                </div>

                {formData.coverLetterOption === 'existing' && (
                  <div className="existing-file-display">
                    {user?.uploadCoverLetter ? (
                      <>
                        <span className="existing-file-text">Current Cover Letter: </span>
                        <a href={user.uploadCoverLetter} target="_blank" rel="noopener noreferrer" className="existing-file-link">
                          View Cover Letter
                        </a>
                      </>
                    ) : (
                      <span className="no-existing-file">No cover letter found. Please upload one or select "I don't have a Cover Letter".</span>
                    )}
                  </div>
                )}

                {formData.coverLetterOption === 'upload' && (
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      id="coverLetterFile"
                      name="coverLetterFile"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                      disabled={loadingCoverLetter}
                    />
                    <label htmlFor="coverLetterFile" className="file-button">
                      {loadingCoverLetter ? 'Uploading...' : 'Choose file'}
                    </label>
                    <span className="file-status">
                      {loadingCoverLetter 
                        ? 'Uploading cover letter...' 
                        : uploadedCoverLetterUrl 
                          ? 'Cover letter uploaded successfully' 
                          : formData.coverLetterFile 
                            ? formData.coverLetterFile.name 
                            : 'No file chosen'
                      }
                    </span>
                    {uploadedCoverLetterUrl && (
                      <a href={uploadedCoverLetterUrl} target="_blank" rel="noopener noreferrer" className="uploaded-file-link">
                        View Uploaded Cover Letter
                      </a>
                    )}
                  </div>
                )}
              </div>
              </div>

              {/* Privacy Policy */}
              <div className="privacy-section">
                <p>Read our <a href="/privacy-policy" target="_blank">Privacy policy</a></p>
              </div>

              {/* Submit Button */}
              <div style={{ textAlign: 'center' }}>
                <button 
                type="submit" 
                className="apply-button"
                disabled={submittingApplication || loadingResume || loadingCoverLetter}
              >
                {submittingApplication ? 'SUBMITTING...' : 'Apply'}
              </button> 
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default JobApplication;