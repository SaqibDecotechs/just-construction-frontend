import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { getUser } from '../../store/slices/authSlice';
import { logout } from '../../store/services/auth';
import { IoIosArrowForward } from "react-icons/io";
import '../../style/components/navbar.css'

const NavbarHero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(getUser);
  console.log("🚀 ~ NavbarHero ~ user:", user)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showJobsDropdown, setShowJobsDropdown] = useState(false);
  const [showNestedJobsDropdown, setShowNestedJobsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleLogout = async () => {
    await logout();
    setShowUserDropdown(false);
    navigate('/');
  };

  const handleDashboard = () => {
    setShowUserDropdown(false);
    navigate('/dashboard');
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const toggleJobsDropdown = () => {
    setShowJobsDropdown(!showJobsDropdown);
  };

  const handleJobsHover = () => {
    setShowJobsDropdown(true);
  };

  const handleJobsLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget || !relatedTarget.closest?.('.jobs-dropdown-menu')) {
      setShowJobsDropdown(false);
      setShowNestedJobsDropdown(false);
    }
  };

  const handleNestedJobsHover = () => {
    setShowNestedJobsDropdown(true);
  };

  const handleNestedJobsLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget || !relatedTarget.closest?.('.nested-jobs-dropdown')) {
      setShowNestedJobsDropdown(false);
    }
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <>


      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? '' : ''}`}>
        <div className="navbar-container">
            <Link to="/" className="logo">
            <div className="logo-text">
            <h4 style={{color:"white",margin:"0px"}}>Fazil Construction</h4>
              {/* <img src="https://lirp.cdn-website.com/2cce4485/dms3rep/multi/opt/JC-Logo-White-Pink-1920w.png" alt="" /> */}
            </div>
          </Link>  

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item" onMouseEnter={() => setShowAboutDropdown(true)} onMouseLeave={() => setShowAboutDropdown(false)}>
              {/* <Link to="/meet-the-team" className={`dropdown-item ${isActivePage('/meet-the-team') ? 'active' : ''}`}>Meet the Team</Link> */}
              <a href="#about" className="nav-link">
                About Us <MdOutlineKeyboardArrowDown size={16} />
              </a>
              {showAboutDropdown && (
                <div className="about-dropdown-menu">
                  <Link to="/meet-the-team" className={`dropdown-item ${isActivePage('/meet-the-team') ? 'active' : ''}`}>Meet the Team</Link>
                  <Link to="/diversity-csr" className={`dropdown-item ${isActivePage('/diversity-csr') ? 'active' : ''}`}>Diversity and CSR</Link>
                  <a href="#join-us" className="dropdown-item">Join Us</a>
                </div>
              )}
            </li>
            {user?.role !== 'admin' && (
              <li className="nav-item" onMouseEnter={handleJobsHover} onMouseLeave={handleJobsLeave}>
                {/* <Link to="/all-jobs" className={`dropdown-item jobs-main ${isActivePage('/all-jobs') ? 'active' : ''}`}>View All Jobs</Link> */}
                <a href="#services" className="nav-link">
                  Job Seekers <MdOutlineKeyboardArrowDown  size={16} />
                </a>
                {showJobsDropdown && (
                  <div className="jobs-dropdown-menu">
                    <Link to="/candidate-commitment" className={`dropdown-item ${isActivePage('/candidate-commitment') ? 'active' : ''}`}>Candidate Commitment</Link>
                    <a href="#submit-cv" className={`dropdown-item ${location.hash === '#submit-cv' ? 'active' : ''}`}>Submit Your CV</a>
                    <a href="#job-alerts" className={`dropdown-item ${location.hash === '#job-alerts' ? 'active' : ''}`}>Job Alerts</a>
                    <a href="#download-cv" className={`dropdown-item ${location.hash === '#download-cv' ? 'active' : ''}`}>Download a CV Template</a>
                    <div className="dropdown-item jobs-item" 
                         onMouseEnter={handleNestedJobsHover} 
                         onMouseLeave={handleNestedJobsLeave}>
                      <span>Jobs</span>
                      <IoIosArrowForward  className="jobs-arrow" />
                      {showNestedJobsDropdown && (
                        <div className="nested-jobs-dropdown"
                             onMouseEnter={handleNestedJobsHover}
                             onMouseLeave={handleNestedJobsLeave}>
                          <Link to="/all-jobs" className={`dropdown-item jobs-main ${isActivePage('/all-jobs') ? 'active' : ''}`}>View All Jobs</Link>
                          <a href="#me-building" className={`dropdown-item ${location.hash === '#me-building' ? 'active' : ''}`}>M&E & Building Services Jobs</a>
                          <a href="#building-envelopes" className={`dropdown-item ${location.hash === '#building-envelopes' ? 'active' : ''}`}>Building Envelopes Jobs</a>
                          <a href="#construction" className={`dropdown-item ${location.hash === '#construction' ? 'active' : ''}`}>Construction Jobs</a>
                          <a href="#interiors" className={`dropdown-item ${location.hash === '#interiors' ? 'active' : ''}`}>Interiors Jobs</a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            )}
            <li className="nav-item">
              <a href="#employers" className="nav-link">
                {/* Employers <MdOutlineKeyboardArrowDown size={16} /> */}
              </a>
            </li>
            <li className="nav-item">
              <a href="#markets" className="nav-link">
                {/* Markets <MdOutlineKeyboardArrowDown size={16} /> */}
              </a>
            </li>
            <li className="nav-item">
              {/* <a href="#news" className="nav-link">News</a> */}
            </li>
            <li className="nav-item">
              {/* <a href="#contact" className="nav-link">Contact</a> */}
            </li>
          </ul>

          <div className="nav-actions">
            {user ? (
              <div className="user-info">
                <div className="user-dropdown" onClick={toggleUserDropdown}>
                  <FaUser className="user-icon" />
                  <span className="user-name">
                    {user.firstName ? `${user.firstName} ${user.lastName}` : user.name || user.email}
                  </span>
                  <MdOutlineKeyboardArrowDown size={16} />
                  {showUserDropdown && (
                    <div className="user-dropdown-menu">
                      <button onClick={handleDashboard} className="dropdown-menu-item">
                        <FaTachometerAlt /> Dashboard
                      </button>
                      <button onClick={handleLogout} className="dropdown-menu-item">
                        <FaSignOutAlt /> Signout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-btn">LOGIN</Link>
                <span className="auth-divider">|</span>
                <Link to="/register" className="auth-btn">REGISTER</Link>
              </div>
            )}
            <div className="country-selector" onClick={toggleCountryDropdown}>
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="US Flag"
                className="flag-icon"
              />
              {showCountryDropdown && (
                <div className="country-dropdown">
                  <div className="country-option">
                    <img src="https://flagcdn.com/w20/us.png" alt="US" />
                  </div>
                  <div className="country-option">
                    <img src="https://flagcdn.com/w20/gb.png" alt="UK" />
                  </div>
                  {/* <div className="country-option">
                    <img src="https://flagcdn.com/w20/ca.png" alt="Canada" />
                  </div> */}
                </div>
              )}
            </div>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

    </>
  );
};

export default NavbarHero;