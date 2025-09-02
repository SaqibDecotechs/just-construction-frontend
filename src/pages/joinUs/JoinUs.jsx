import React, { useState, useEffect } from "react";
import NavBar from "../../component/navbar/NavBar";
import Footer from "../../component/footer/Footer";
import "./joinUs.css";

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState("shaun");
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const images = [
    "/carousel.webp",
    "/carousel.webp",
    "/carousel.webp",
    "/carousel.webp",
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
              Our most important asset is the people who work for the business.
              We will invest in your future, give you the platform to perform
              and will provide you with incentives that drive you to be the
              best.
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
            Just Construction are a driven and ambitious Recruitment Consultancy
            committed to creating a world-class workplace. We will offer you
            career-long training and development to help you be the best version
            of yourself.
          </p>
          <p>
            We are passionate about delivering a high-quality service to our
            clients and candidates, we provide you with a fun, ambitious and
            supportive environment for you to flourish in. What are you waiting
            for, come and join us.
          </p>
          <button className="join-btn">Join Us</button>
        </div>
      </section>

      {/* Latest Opportunities Section */}
      <section className="latest-opportunities">
        <h2>LATEST OPPORTUNITIES</h2>
        <div className="opportunities-container">
          <div className="job-item">
            <div className="job-left">
              <span className="job-dept">Building Services</span>
              <a href="#">Managing Consultant - Building Services</a>
            </div>
            <span className="job-location">Bromley, Greater London</span>
          </div>

          <div className="job-item">
            <div className="job-left">
              <span className="job-dept">Delivery Team</span>
              <a href="#">Talent Acquisition Manager</a>
            </div>
            <span className="job-location">Austin, TX</span>
          </div>

          <div className="job-item">
            <div className="job-left">
              <span className="job-dept">Recruitment Consultant - US Team</span>
              <a href="#">Recruitment Consultant - US Team</a>
            </div>
            <span className="job-location">
              Bromley, Greater London (Hybrid)
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
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
              <p>There are too many reasons to state why I love this place</p>
              <p>
                I have loved every minute of my 3.5 years of service at Just
                Construction Recruitment, during this time I have managed to
                work my way up from Resourcer to Managing Consultant and I am
                even eyeing up a divisional management role in the near future.
              </p>
              <p>
                There are too many reasons to state why I love this place, I
                mean the systems and processes are excellent compared to 99% of
                recruitment firms, the people are class beyond belief and the
                senior management team are helpful, funny and friends.
              </p>
              <p>
                Would recommend Just construction to anyone in my family or
                friendship group, so hopefully that shows the level of company I
                work for.
              </p>
              <p>
                We have amazing days out; we are paid well and the lifestyle is
                like no other.
              </p>
            </div>
          )}

          {activeTab === "ellis" && (
            <div className="testimonial-box">
              <h4>Principal Consultant | Building Envelopes - US</h4>
              <p>
                The support shown to every member of staff is second to none
              </p>
              <p>
                Having been working for Just Construction for the best part of 8
                years, I have really enjoyed every minute.
              </p>
              <p>
                The support shown to every member of staff is second to none and
                not the usual cut-throat nature you see in recruitment.
              </p>
              <p>
                The progress and growth of the business since I first joined is
                amazing and been done the right way.
              </p>
            </div>
          )}
        </div>
      </section>

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
          <img src="/career path.webp" alt="Career Path Diagram" />
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
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              className={`gallery-item ${galleryItemClasses[i] || ""}`}
              key={i}
            >
              <img src="/carousel.webp" alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
