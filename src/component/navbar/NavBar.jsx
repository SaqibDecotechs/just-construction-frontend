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
import { selectCountry, selectSelectedCountry, selectSelectedLocale } from '../../store/slices/countrySlice';
import { getCountryFlagUrl, getLocalizedText } from '../../utils/localization';
import '../../style/components/navbar.css'

const NavbarHero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(getUser);
  const selectedCountry = useSelector(selectSelectedCountry);
  const selectedLocale = useSelector(selectSelectedLocale);
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

  const handleCountryChange = (country) => {
    dispatch(selectCountry(country));
    setShowCountryDropdown(false);
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
                {getLocalizedText('aboutUs', selectedLocale)} <MdOutlineKeyboardArrowDown size={16} />
              </a>
              {showAboutDropdown && (
                <div className="about-dropdown-menu">
                  <Link to="/meet-the-team" className={`dropdown-item ${isActivePage('/meet-the-team') ? 'active' : ''}`}>Meet the Team</Link>
                  <Link to="/diversity-csr" className={`dropdown-item ${isActivePage('/diversity-csr') ? 'active' : ''}`}>
                    Diversity and CSR - We {getLocalizedText('organize', selectedLocale)} our efforts
                  </Link>
                  <Link to="/join-us" className="dropdown-item">
                    Join Us - Your {getLocalizedText('favorite', selectedLocale)} construction team
                  </Link>
                </div>
              )}
            </li>
            {user?.role !== 'admin' && (
              <li className="nav-item" onMouseEnter={handleJobsHover} onMouseLeave={handleJobsLeave}>
                {/* <Link to="/all-jobs" className={`dropdown-item jobs-main ${isActivePage('/all-jobs') ? 'active' : ''}`}>View All Jobs</Link> */}
                <a href="#services" className="nav-link">
                  {getLocalizedText('jobSeekers', selectedLocale)} <MdOutlineKeyboardArrowDown  size={16} />
                </a>
                {showJobsDropdown && (
                  <div className="jobs-dropdown-menu">
                    <Link to="/candidate-commitment" className={`dropdown-item ${isActivePage('/candidate-commitment') ? 'active' : ''}`}>
                      Candidate Commitment - We {getLocalizedText('realize', selectedLocale)} your potential
                    </Link>
                    <Link to="/submit-cv" className={`dropdown-item ${isActivePage('/submit-cv') ? 'active' : ''}`}>Submit Your CV</Link>
                    <a href="#job-alerts" className={`dropdown-item ${location.hash === '#job-alerts' ? 'active' : ''}`}>
                      Job Alerts - Get {getLocalizedText('organized', selectedLocale)} updates
                    </a>
                    <a href="#download-cv" className={`dropdown-item ${location.hash === '#download-cv' ? 'active' : ''}`}>
                      Download a CV Template - Our {getLocalizedText('specializations', selectedLocale)}
                    </a>
                    <div className="dropdown-item jobs-item" 
                         onMouseEnter={handleNestedJobsHover} 
                         onMouseLeave={handleNestedJobsLeave}>
                      <span>Jobs</span>
                      <IoIosArrowForward  className="jobs-arrow" />
                      {showNestedJobsDropdown && (
                        <div className="nested-jobs-dropdown"
                             onMouseEnter={handleNestedJobsHover}
                             onMouseLeave={handleNestedJobsLeave}>
                          <Link to="/all-jobs" className={`dropdown-item jobs-main ${isActivePage('/all-jobs') ? 'active' : ''}`}>
                            View All Jobs - Well {getLocalizedText('organized', selectedLocale)} opportunities
                          </Link>
                          <a href="#me-building" className={`dropdown-item ${location.hash === '#me-building' ? 'active' : ''}`}>
                            M&E & Building Services - Our {getLocalizedText('center', selectedLocale)} of excellence
                          </a>
                          <a href="#building-envelopes" className={`dropdown-item ${location.hash === '#building-envelopes' ? 'active' : ''}`}>
                            Building Envelopes - Quality {getLocalizedText('specializations', selectedLocale)}
                          </a>
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
            <div className="country-selector">
              <div className="custom-select-wrapper">
                <div 
                  className="custom-select" 
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <img 
                    src={getCountryFlagUrl(selectedCountry || 'US', 20)} 
                    alt={selectedCountry || 'US'} 
                    className="selected-flag"
                  />
                  <svg className="select-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                {showCountryDropdown && (
                  <div className="custom-options">
                    <div 
                      className="custom-option" 
                      onClick={() => handleCountryChange('US')}
                    >
                      <img src="https://flagcdn.com/w20/us.png" alt="US" />
                    </div>
                    <div 
                      className="custom-option" 
                      onClick={() => handleCountryChange('UK')}
                    >
                      <img src="https://flagcdn.com/w20/gb.png" alt="UK" />
                    </div>
                  </div>
                )}
              </div>
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