import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000';

export const publicAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateAPI = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
   headers: {
    common: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  },
});

privateAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// privateAPI.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.clear();
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );