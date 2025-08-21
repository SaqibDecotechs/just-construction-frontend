import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { privateAPI } from '../../config/constants';
import MDEditor from '@uiw/react-md-editor';
import './jobPost.css';

const JobPost = ({ onCancel, onSave, editingJob }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    industry: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    salary: '',
    aboutClient: '',
    aboutRole: '',
    aboutCandidate: '',
    lastDateToApply: ''
  });

  const [loading, setLoading] = useState(false);

  // Populate form when editing an existing job
  useEffect(() => {
    if (editingJob) {
      setFormData({
        jobTitle: editingJob.jobTitle || '',
        location: editingJob.location || '',
        industry: editingJob.industry || '',
        contactName: editingJob.contactName || '',
        contactEmail: editingJob.contactEmail || '',
        contactPhone: editingJob.contactPhone || '',
        salary: editingJob.salary || '',
        aboutClient: editingJob.aboutClient || '',
        aboutRole: editingJob.aboutRole || '',
        aboutCandidate: editingJob.aboutCandidate || '',
        lastDateToApply: editingJob.lastDateToApply ? editingJob.lastDateToApply.split('T')[0] : ''
      });
    } else {
      // Reset form for new job
      setFormData({
        jobTitle: '',
        location: '',
        industry: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        salary: '',
        aboutClient: '',
        aboutRole: '',
        aboutCandidate: '',
        lastDateToApply: ''
      });
    }
  }, [editingJob]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      let response;
      if (editingJob) {
        // Update existing job
        response = await privateAPI.put(`/job/${editingJob._id}`, formData);
        if (response.data) {
          toast.success('Job updated successfully!');
        }
      } else {
        // Create new job
        response = await privateAPI.post('/job/create', formData);
        if (response.data) {
          toast.success('Job posted successfully!');
        }
      }

      if (response.data && onSave) {
        await onSave(response.data.data);
      }
    } catch (error) {
      console.error('Error saving job:', error);
      toast.error(editingJob ? 'Error updating job. Please try again.' : 'Error posting job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="job-post-container">
      <div className="job-post-content">
        
        <div className="job-post-form-section">
          
          {/* Basic Job Information */}
          <div className="form-section">
            <h3 className="section-title">Job Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Job Title*</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior Construction Manager"
                  required
                />
              </div>
              <div className="form-group">
                <label>Location*</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. London, UK"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Industry*</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="Construction">Construction</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Building Services">Building Services</option>
                </select>
              </div>
              <div className="form-group">
                <label>Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g. £50,000 - £70,000"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Last Date to Apply</label>
              <input
                type="date"
                name="lastDateToApply"
                value={formData.lastDateToApply}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section">
            <h3 className="section-title">Contact Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Contact Name*</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="e.g. John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Email*</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="e.g. john@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Contact Phone</label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                placeholder="e.g. +44 123 456 7890"
              />
            </div>
          </div>

          {/* Job Details */}
          <div className="form-section">
            <h3 className="section-title">Job Details</h3>
            
            <div className="form-group full-width">
              <label>About Client*</label>
              <div className="editor-container">
                <MDEditor
                  value={formData.aboutClient}
                  onChange={(value) => setFormData(prev => ({ ...prev, aboutClient: value || '' }))}
                  preview="edit"
                  hideToolbar={false}
                  data-color-mode="light"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>About Role*</label>
              <div className="editor-container">
                <MDEditor
                  value={formData.aboutRole}
                  onChange={(value) => setFormData(prev => ({ ...prev, aboutRole: value || '' }))}
                  preview="edit"
                  hideToolbar={false}
                  data-color-mode="light"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>About Candidate*</label>
              <div className="editor-container">
                <MDEditor
                  value={formData.aboutCandidate}
                  onChange={(value) => setFormData(prev => ({ ...prev, aboutCandidate: value || '' }))}
                  preview="edit"
                  hideToolbar={false}
                  data-color-mode="light"
                />
              </div>
            </div>
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
                {loading ? (editingJob ? 'UPDATING...' : 'POSTING...') : (editingJob ? 'UPDATE JOB' : 'POST JOB')}
              </button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobPost;