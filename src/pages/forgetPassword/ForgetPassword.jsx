import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import { forgotPassword, resetPassword } from '../../store/services/auth';
import './forgetPassword.css';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 for email, 2 for token and password

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      setLoading(true);
      
      const response = await forgotPassword(email);
      
      if (response) {
        setStep(2); // Move to token and password step
      }
    } catch (error) {
      console.error('Forgot password error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      toast.error('Please enter the reset token');
      return;
    }
    
    if (!password) {
      toast.error('Please enter a new password');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      setLoading(true);
      
      const payload = {
        email,
        passwordResetToken: token,
        password
      };
      
      const response = await resetPassword(payload);
      
      if (response) {
        toast.success('Password reset successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      console.error('Reset password error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forget-password-page">
      <NavBar />
      
      <div className="forget-password-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Forgot Password</h1>
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="forget-password-content">
        <div className="forget-password-container">
          <div className="forget-password-form-wrapper">
            {step === 1 ? (
              <form onSubmit={handleEmailSubmit} className="forget-password-form">
                <div className="form-group">
                  <label htmlFor="email">Please your enter email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="saqibraheem123@decotechs.xyz"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="send-reset-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send reset link'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleResetSubmit} className="forget-password-form">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    disabled
                    className="disabled-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="token">Enter reset token:</label>
                  <input
                    type="text"
                    id="token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="Enter the token sent to your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">New Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    minLength="6"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                    minLength="6"
                  />
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="back-btn"
                    onClick={() => setStep(1)}
                    disabled={loading}
                  >
                    Back to Email
                  </button>
                  <button 
                    type="submit" 
                    className="send-reset-btn"
                    disabled={loading}
                  >
                    {loading ? 'Resetting...' : 'Reset Password'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgetPassword;