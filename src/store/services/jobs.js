import { publicAPI, privateAPI } from "../../config/constants";
import { toast } from 'react-toastify';

const handleError = (error) => {
  const message = error?.response?.data?.message || "Server Error";
  console.error(message);
  toast.error(message);
};

const handleSuccess = (message) => {
  toast.success(message);
};

export const getAllJobs = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    // Add filters to query params
    if (filters.industry) queryParams.append('industry', filters.industry);
    if (filters.location) queryParams.append('location', filters.location);
    if (filters.jobTitle) queryParams.append('jobTitle', filters.jobTitle);
    if (filters.minSalary) queryParams.append('minSalary', filters.minSalary);
    if (filters.maxSalary) queryParams.append('maxSalary', filters.maxSalary);

    const queryString = queryParams.toString();
    const url = queryString ? `/job/all?${queryString}` : '/job/all';
    
    const response = await publicAPI.get(url);
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getJobById = async (jobId) => {
  try {
    const response = await publicAPI.get(`/job/${jobId}`);
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const applyForJob = async (jobId, applicationData) => {
  try {
    const response = await privateAPI.post(`/job/${jobId}/apply`, applicationData);
    if (response) {
      handleSuccess('Application submitted successfully!');
    }
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const saveJob = async (jobId) => {
  try {
    const response = await privateAPI.post(`/job/${jobId}/save`);
    if (response) {
      handleSuccess('Job saved successfully!');
    }
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const unsaveJob = async (jobId) => {
  try {
    const response = await privateAPI.delete(`/job/${jobId}/save`);
    if (response) {
      handleSuccess('Job removed from saved jobs!');
    }
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getSavedJobs = async () => {
  try {
    const response = await privateAPI.get('/job/saved');
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getJobsByCategory = async (category) => {
  try {
    const response = await publicAPI.get(`/job/category/${category}`);
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const searchJobs = async (searchTerm) => {
  try {
    const response = await publicAPI.get(`/job/search?q=${encodeURIComponent(searchTerm)}`);
    return response?.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};