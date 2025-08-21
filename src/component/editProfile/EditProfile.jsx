import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaUpload, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { getUser, setUser } from '../../store/slices/authSlice';
import { privateAPI } from '../../config/constants';
import { uploadSingleFile } from '../../utils/fileUpload';
import './editProfile.css';
import store from '../../store';

const EditProfile = ({ onCancel, onSave }) => {
  const user = useSelector(getUser);
  
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    phoneNumber: '',
    mobileNumber: '',
    skills: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverLetterUrl, setCoverLetterUrl] = useState('');
  const [loadingProfileImage, setLoadingProfileImage] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false);
  const [loadingCoverLetter, setLoadingCoverLetter] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await privateAPI.get('/auth/my-profile');
      console.log("🚀 ~ fetchProfile ~ response:", response);
      console.log("🚀 ~ fetchProfile ~ profileData:", response.data.data);
      
      if (response.data && response.data.data && response.data.data.user) {
        store.dispatch(setUser(response?.data?.data));
        const profileData = response.data.data.user;
        
        setFormData({
          firstName: profileData.firstName || '',
          lastName: profileData.lastName || '',
          email: profileData.email || '',
          address: profileData.address || '',
          city: profileData.city || '',
          state: profileData.state || '',
          postcode: profileData.postcode || '',
          phoneNumber: profileData.phoneNumber || '',
          mobileNumber: profileData.mobileNumber || '',
          skills: Array.isArray(profileData.skills) ? profileData.skills.join(', ') : (profileData.skills || ''),
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        
        console.log("🚀 ~ Profile image URL:", profileData.uploadProfileImage);
        
        if (profileData.uploadProfileImage) {
          setProfileImageUrl(profileData.uploadProfileImage);
        }
        if (profileData.uploadResume) {
          setResumeUrl(profileData.uploadResume);
        }
        if (profileData.uploadCoverLetter) {
          setCoverLetterUrl(profileData.uploadCoverLetter);
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = async (type, file) => {
    console.log("🚀 ~ handleFileUpload ~ file:", file)
    if (!file) return;
    
    try {
      const formData = new FormData();
      formData.append("storecsv", file);
      
      // Check if file is actually appended
      console.log("🚀 ~ handleFileUpload ~ formData:", formData)
      console.log("🚀 ~ FormData has file:", formData.has("storecsv"))
      console.log("🚀 ~ FormData get file:", formData.get("storecsv"))
      
      // Check FormData entries
      for (let [key, value] of formData.entries()) {
        console.log("🚀 ~ FormData entry:", key, value);
        if (value instanceof File) {
          console.log("🚀 ~ File details:", {
            name: value.name,
            size: value.size,
            type: value.type
          });
        }
      }
      if (type === 'profileImage') {
        setLoadingProfileImage(true);
        const responseUrl = await uploadSingleFile(formData);
        if (responseUrl) {
          setProfileImageUrl(responseUrl);
        }
        setLoadingProfileImage(false);
      } else if (type === 'resume') {
        setLoadingResume(true);
        const responseUrl = await uploadSingleFile(formData);
        if (responseUrl) {
          setResumeUrl(responseUrl);
        }
        setLoadingResume(false);
      } else if (type === 'coverLetter') {
        setLoadingCoverLetter(true);
        const responseUrl = await uploadSingleFile(formData);
        if (responseUrl) {
          setCoverLetterUrl(responseUrl);
        }
        setLoadingCoverLetter(false);
      }
    } catch (error) {
      console.error('File upload error:', error);
      if (type === 'profileImage') setLoadingProfileImage(false);
      else if (type === 'resume') setLoadingResume(false);
      else if (type === 'coverLetter') setLoadingCoverLetter(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      
      if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
        toast.error('New password and confirm password do not match');
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('postcode', formData.postcode);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('mobileNumber', formData.mobileNumber);
      formDataToSend.append('skills', formData.skills);
      
      if (profileImageUrl) {
        formDataToSend.append('uploadProfileImage', profileImageUrl);
      }
      if (resumeUrl) {
        formDataToSend.append('uploadResume', resumeUrl);
      }
      if (coverLetterUrl) {
        formDataToSend.append('uploadCoverLetter', coverLetterUrl);
      }
      
      // Add password fields if provided
      if (formData.currentPassword) {
        formDataToSend.append('currentPassword', formData.currentPassword);
      }
      if (formData.newPassword) {
        formDataToSend.append('newPassword', formData.newPassword);
      }

      console.log('Sending form data to /auth/profile');
      const response = await privateAPI.post('/auth/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data) {
        toast.success('Profile updated successfully!');
        fetchProfile()
        if (onSave) {
          await onSave(response.data.data);
        }
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      toast.error('Error updating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
    }
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-content">
        
        {/* Profile Image Section */}
        <div className="profile-image-section">
          <div className="profile-avatar-large">
            <div className="avatar-placeholder-large">
              {profileImageUrl ? (
                <img 
                  src={profileImageUrl} 
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
            <input
              type="file"
              id="profileImageInput"
              style={{ display: 'none' }}
              onChange={(e) => handleFileUpload('profileImage', e.target.files[0])}
              accept="image/*"
            />
            <button 
              className="upload-image-btn"
              onClick={() => document.getElementById('profileImageInput').click()}
              disabled={loadingProfileImage}
            >
              <FaUpload /> {loadingProfileImage ? 'UPLOADING...' : 'UPLOAD IMAGE'}
            </button>
          </div>

          {/* Upload Resume Section */}
          <div className="upload-section">
            <label>Upload Resume</label>
            <div 
              className={`file-upload-area ${loadingResume ? 'disabled' : ''}`} 
              onClick={() => !loadingResume && document.getElementById('resumeInput').click()}
            >
              <FaUpload />
              <span>{loadingResume ? 'Uploading...' : 'Upload Resume'}</span>
            </div>
            <input
              style={{ display: 'none' }}
              type="file"
              id="resumeInput"
              onChange={(e) => handleFileUpload('resume', e.target.files[0])}
              accept="image/*,.pdf"
              disabled={loadingResume}
            />
            {resumeUrl && (
              <div className="file-url-display">
                <span>Uploaded: </span>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </div>
            )}
          </div>

          {/* Upload Cover Letter Section */}
          <div className="upload-section">
            <label>Upload Cover Letter</label>
            <div 
              className={`file-upload-area ${loadingCoverLetter ? 'disabled' : ''}`} 
              onClick={() => !loadingCoverLetter && document.getElementById('coverLetterInput').click()}
            >
              <FaUpload />
              <span>{loadingCoverLetter ? 'Uploading...' : 'Upload Cover Letter'}</span>
            </div>
            <input
              style={{ display: 'none' }}
              type="file"
              id="coverLetterInput"
              onChange={(e) => handleFileUpload('coverLetter', e.target.files[0])}
              accept="image/*,.pdf"
              disabled={loadingCoverLetter}
            />
            {coverLetterUrl && (
              <div className="file-url-display">
                <span>Uploaded: </span>
                <a href={coverLetterUrl} target="_blank" rel="noopener noreferrer">
                  View Cover Letter
                </a>
              </div>
            )}
          </div>

          {/* Password Section */}
          <div className="password-section-left">
            <div className="form-group">
              <label>Current Password</label>
              <div className="password-input-group">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>New Password</label>
              <div className="password-input-group">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="password-input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="profile-form-section">
          
          {/* Personal Information */}
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter city"
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </select>
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                placeholder="12345"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="(555) 987-6543"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="Enter your skills separated by commas"
              rows="3"
            />
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <div className="main-actions">
              <button 
                type="button" 
                className="save-btn"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? 'SAVING...' : 'SAVE'}
              </button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
            
            <button 
              type="button" 
              className="delete-account-btn"
              onClick={handleDeleteAccount}
            >
              DELETE ACCOUNT
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditProfile;