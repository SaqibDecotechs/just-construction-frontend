import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../../store/services/auth';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await login(formData);
      if (result === 'verified') {
        navigate('/');
      } else if (result === 'unverified') {
        toast.warning('Please verify your email before logging in.');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkedInLogin = () => {
    window.open('https://www.linkedin.com/oauth/v2/authorization', '_blank');
  };

  const handleGoogleLogin = () => {
    // Google Sign-In functionality
    const googleAuthUrl = 'https://accounts.google.com/oauth/v2/auth?' +
      'client_id=YOUR_GOOGLE_CLIENT_ID&' +
      'redirect_uri=' + encodeURIComponent(window.location.origin + '/auth/google/callback') + '&' +
      'response_type=code&' +
      'scope=email profile';
    
    window.location.href = googleAuthUrl;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <NavBar />
      
      <div className="login-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Login</h1>
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="login-form-container">
        <div className="login-form-wrapper">
          <div className="social-login-buttons">
            <button 
              type="button" 
              className="linkedin-btn"
              onClick={handleLinkedInLogin}
            >
              <span className="linkedin-icon">in</span>
              Sign in with LinkedIn
            </button>
            
            <button 
              type="button" 
              className="google-btn"
              onClick={handleGoogleLogin}
            >
              <span className="google-icon">G</span>
              Sign in with Google
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    {showPassword ? (
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.06-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.46 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>
                    ) : (
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
                    )}
                  </svg>
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-links">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot password?
              </Link>
              <Link to="/privacy-policy" className="privacy-link">
                Read our Privacy Policy
              </Link>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button 
              type="submit" 
              className="login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;