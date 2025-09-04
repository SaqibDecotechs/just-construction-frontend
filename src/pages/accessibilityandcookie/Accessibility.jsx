import React from "react";
import "./Accessibility.css";
import NavBar from "../../component/navbar/NavBar";
import Footer from "../../component/footer/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";

const AccessibilityCookies = () => {
  return (
    <div className="accessibility-cookies-page">
      <NavBar />

      {/* Hero Section */}
      <section className="ac-hero">
        <div className="ac-overlay-content">
          <h1 className="ac-title">Accessibility & Cookie Policy</h1>
          <div className="hero-arrow">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="ac-content">
        <div className="ac-container">
          {/* Accessibility Statement */}
          <h2>Accessibility Statement</h2>
          <p>
            At Just Construction Recruitment, we are committed to making our
            website accessible to all users, including people with disabilities.
            We regularly review and update our design and content to meet
            accessibility standards and ensure a smooth user experience.
          </p>

          <h3>Features We Provide</h3>
          <ul>
            <li>Keyboard-friendly navigation across all pages.</li>
            <li>Clear headings and logical content structure.</li>
            <li>Alternative text for images and media.</li>
            <li>Readable fonts, scalable text, and proper color contrast.</li>
          </ul>

          <h3>Feedback</h3>
          <p>
            If you face any accessibility challenges on our website, please let
            us know so we can improve:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:office@just-constructionrec.com">
              office@just-constructionrec.com
            </a>
            <br />
            <strong>Phone:</strong> 020 3 405 3186
          </p>

          {/* Cookie Policy */}
          <h2>Cookie Policy</h2>
          <p>
            Our website uses cookies to distinguish you from other visitors.
            This helps us improve performance, provide a better browsing
            experience, and personalise content.
          </p>

          <h3>What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your browser or device when
            you visit a website. They contain data that helps us recognise your
            preferences and optimise site functionality.
          </p>

          <h3>Types of Cookies We Use</h3>
          <ul>
            <li>
              <strong>Strictly Necessary Cookies:</strong> Essential for site
              security and basic functions.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us track visitor
              numbers and browsing behaviour to improve navigation.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Store preferences like
              language and region for a personalised experience.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> Track your visits and
              interactions for relevant advertising and promotions.
            </li>
          </ul>

          <h3>Managing Cookies</h3>
          <p>
            You can disable cookies by changing your browser settings. Please
            note that some features of the site may not work properly if cookies
            are disabled. Except for essential cookies, all cookies expire after
            12 months.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessibilityCookies;
