import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Diversity & CSR', path: '/diversity-csr' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'View Jobs', path: '/all-jobs' },
    { name: 'Employers', path: '/our-services' },
    { name: 'Contact', path: '/contact' },
  ];

  const jobLinks = [
    { name: 'Candidate Commitment', path: '/candidate-commitment' },
    { name: 'Submit Your CV', path: '/submit-cv' },
    { name: 'Job Alerts', path: '/job-alerts' },
  ];

  const socialIcons = [
    { name: 'linkedin', icon: '💼', color: '#0077B5' },
    { name: 'instagram', icon: '📷', color: '#E4405F' },
    { name: 'facebook', icon: '📘', color: '#1877F2' },
    { name: 'youtube', icon: '📺', color: '#FF0000' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Left Section - Logo and Contact */}
          <div className="footer-left">
            <div className="footer-logo">
              <h2 className="logo-text">
                Fazil Construction
              </h2>
            </div>

            <div className="footer-contact">
              <div className="contact-section">
                <h4>Austin Office:</h4>
                <p>324 E 7th Street, Suite 200, Austin TX, 78702</p>
              </div>
              <div className="contact-section">
                <h4>Call Us:</h4>
                <p>512 358 1435</p>
              </div>
              <div className="contact-section">
                <h4>Email Us:</h4>
                <p>austin@just-constructionlnc.com</p>
              </div>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="footer-center">
            <h3>QUICK LINKS</h3>
            <ul className="quick-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Jobs */}
          <div className="footer-right">
            <h3>JOBS</h3>
            <ul className="job-links">
              {jobLinks.map((job, index) => (
                <li key={index}>
                  <Link to={job.path}>{job.name}</Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="social-section">
              <h4>CONNECT WITH US</h4>
              <div className="social-icons">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={`#${social.name}`}
                    className="social-icon"
                    style={{ backgroundColor: social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="/gdpr-compliance">GDPR Compliance Statement</a>
            <span>|</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <span>|</span>
            <a href="/complaints-policy">Complaints Policy</a>
            <span>|</span>
            <a href="/accessibility-and-cookies">Accessibility & Cookies</a>
          </div>
          <div className="powered-by">
            Powered with <span className="heart">❤️</span> by Shaarame
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
