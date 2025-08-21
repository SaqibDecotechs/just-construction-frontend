import React from 'react';
import './footer.css';

const Footer = () => {
  const quickLinks = [
    'Sectors',
    'Markets',
    'About Us',
    'Join Us',
    'News',
    'Contact'
  ];

  const jobCategories = [
    'View All Jobs',
    'Drywall Jobs',
    'Carpentry Jobs',
    'Mechanical & HVAC Jobs',
    'General Contracting Jobs',
    'Roofing Jobs',
    'Electrical Jobs'
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
              {/* <h2 className="logo-text">
                JUST<br />
                <span className="logo-construction">CONSTRUCTION</span><br />
                <span className="logo-specialists">SPECIALISTS</span>
              </h2> */}
              <img src="https://lirp.cdn-website.com/2cce4485/dms3rep/multi/opt/JC_Logo-540w.png" width={120} alt="" />

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

          {/* Center Section - Quick Links */}
          <div className="footer-center">
            <h3>QUICK LINKS</h3>
            <ul className="quick-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Jobs */}
          <div className="footer-right">
            <h3>JOBS</h3>
            <ul className="job-links">
              {jobCategories.map((job, index) => (
                <li key={index}>
                  <a href={`/jobs/${job.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}>
                    {job}
                  </a>
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
            <a href="/terms-conditions">Terms & Conditions</a>
            <span>|</span>
            <a href="/complaints-policy">Complaints Policy</a>
            <span>|</span>
            <a href="/accessibility">Accessibility & Cookies</a>
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