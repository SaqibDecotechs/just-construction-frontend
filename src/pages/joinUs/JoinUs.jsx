import React, { useState, useEffect } from "react";
import NavBar from "../../component/navbar/NavBar";
import Footer from "../../component/footer/Footer";
import "./joinUs.css";
import Career from "../../assest/career.jpeg";
import joinsl1 from "../../assest/join-sl1.jpeg";
import joinsl2 from "../../assest/join-sl2.jpeg";
import joinsl3 from "../../assest/join-sl3.jpeg";
import joinsl4 from "../../assest/join-sl4.jpeg";
import joinsl5 from "../../assest/join-sl5.jpeg";
import joinsl6 from "../../assest/join-sl6.jpeg";
import g1 from "../../assest/join-g1.jpeg";
import g2 from "../../assest/join-g2.webp";
import g3 from "../../assest/complaints-bg.jpeg";
import g4 from "../../assest/join-g4.webp";
import g5 from "../../assest/join-g5.jpeg";
import g6 from "../../assest/join-g6.webp";
import { useNavigate } from "react-router-dom";
import Button from "../../component/button";

const JoinUs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("shaun");
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const images = [
    joinsl1,
    joinsl2,
    joinsl3,
    joinsl4,
    joinsl5,
    joinsl6
  ];


  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Classes for mosaic effect
  const galleryItemClasses = [
    "tall",
    "wide",
    "",
    "tall",
    "wide tall",
    "",
    "tall",
    "wide",
    "",
    "tall",
    "wide",
    "",
  ];

  return (
    <div className="join-us-page">
      <NavBar />

      {/* Hero Section */}
      <section className="join-us-hero">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-video">
            <video controls>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="hero-content">
            <h1>JOIN US</h1>
            <p>
              Our greatest asset is our people. We are committed to investing in your future, providing the platform for you to perform, and offering incentives that inspire you to achieve your best.
            </p>
          </div>
        </div>
        <div className="scroll-down">
          <span>&#x25BC;</span>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="why-container">
          <h2>WHY JOIN US?</h2>
          <p>
            From the very beginning, our mission has been to challenge the negative perceptions of recruiters by building a business grounded in our core values: Honesty, Integrity, and Transparency.
          </p>
          <p>
            Since our inception, Fazil Construction Recruitment has grown into a trusted consultancy with deep expertise across Construction, Mechanical & Electrical, Building Envelopes, and Interiors. What started in London has now expanded to deliver recruitment solutions across the UK, Europe, and the United States.
          </p>
          <p>
            Our continued success comes from keeping employee development at the centre of everything we do. To be true market specialists, we must understand the industries we serve. That’s why every member of our team undergoes continuous training and development — ensuring they perform at their very best.
          </p>

          <div style={{ textAlign: "center" }}>
            <Button text="Join Us" onClick={() => navigate("/join-us")} />
          </div>
        </div>
      </section>

      {/* Latest Opportunities Section */}
      <section className="latest-opportunities">
        <h2>Latest Opportunities</h2>
        <div className="opportunities-container">
          <div className="job-item">
            <div className="job-left">
              <span className="job-dept">Building Services</span>
              <a href="#">Managing Consultant – Building Services</a>
            </div>
            <span className="job-location">Greater London</span>
          </div>

          <div className="job-item">
            <div className="job-left">
              <span className="job-dept">Delivery Team</span>
              <a href="#">Talent Acquisition Manager</a>
            </div>
            <span className="job-location">Austin, Texas</span>
          </div>

          <div className="job-item">
            <div className="job-left">
              <span className="job-dept">US Recruitment Team</span>
              <a href="#">Recruitment Consultant</a>
            </div>
            <span className="job-location">Greater London (Hybrid)</span>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <div className="tabs">
          <button
            className={activeTab === "shaun" ? "tab active" : "tab"}
            onClick={() => setActiveTab("shaun")}
          >
            Shaun Everest
          </button>
          <button
            className={activeTab === "ellis" ? "tab active" : "tab"}
            onClick={() => setActiveTab("ellis")}
          >
            Ellis Morris
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "shaun" && (
            <div className="testimonial-box">
              <h4>Managing Consultant | Interior Contracting - UK</h4>
              <p>I can’t put into words just how much I enjoy working here.</p>
              <p>
                Over the past 3.5 years at Fazil Construction Recruitment, I’ve loved every moment. In that time, I’ve progressed from Resourcer to Managing Consultant, and I’m now aiming for a divisional management role in the near future.
              </p>
              <p>
                There are countless reasons why I value this company—the systems and processes are far superior to most recruitment firms, the people are truly exceptional, and the senior management team are not only supportive but also approachable, funny, and genuine friends.
              </p>
              <p>
                I’d happily recommend Fazil Construction to my family and friends, which speaks volumes about the quality of this company.
              </p>
              <p>
                From fantastic team outings to great pay and an unmatched lifestyle, working here has been an incredible experience.
              </p>
            </div>
          )}

          {activeTab === "ellis" && (
            <div className="testimonial-box">
              <h4>Principal Consultant | Building Envelopes - US</h4>
              <p>
                The support given to every member of the team is truly unmatched.
              </p>
              <p>
                Having worked at Fazil Construction for nearly 8 years, I can honestly say I’ve enjoyed every moment.
              </p>
              <p>
                Unlike the typical cut-throat culture often seen in recruitment, the support here is genuine and consistent.
              </p>
              <p>
                The progress and growth of the business since I first joined has been remarkable—and achieved in the right way.
              </p>
            </div>
          )}
        </div>
      </section> */}

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevSlide}>
            &#8249;
          </button>

          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {images.map((img, index) => (
              <div className="carousel-card" key={index}>
                <img src={img} alt={`Team member ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Career Path Section */}
      <section className="career-path">
        <div className="career-image">
          <img src={Career} alt="Career Path Diagram" />
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Updated Gallery Section */}
      <section className="gallery">
        <div className="gallery-container">
          {[
            joinsl1,
            joinsl2,
            joinsl3,
            joinsl4,
            joinsl5,
            joinsl6,
            g1,
            g2,
            g3,
            g4,
            g5,
            g6,
          ].map((img, i) => (
            <div className={`gallery-item ${galleryItemClasses[i] || ""}`} key={i}>
              <img src={img} alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default JoinUs;
