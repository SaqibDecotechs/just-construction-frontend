import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import "./candidateLatestOpportunities.css";
import Button from "../button";

const CandidateLatestOpportunities = () => {
  const navigate = useNavigate();
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const opportunities = [
    {
      _id: "1",
      location: "Greater London",
      country: "United Kingdom",
      jobTitle: "Project Manager",
      industry: "Interiors",
      salary: "£ 65,000 - 70,000 GBP",
    },
    {
      _id: "2",
      location: "East Sussex",
      country: "United Kingdom",
      jobTitle: "Assistant QS/QS/Senior QS",
      industry: "Interiors",
      salary: "£ 30,000 - 60,000 GBP",
    },
    {
      _id: "3",
      location: "Surrey",
      country: "United Kingdom",
      jobTitle: "Roofing Junior Contracts Manager",
      industry: "Building Envelopes",
      salary: "£ 40,000 - 50,000 GBP",
    },
    {
      _id: "4",
      location: "Manchester",
      country: "United Kingdom",
      jobTitle: "Site Manager",
      industry: "Construction",
      salary: "£ 50,000 - 60,000 GBP",
    },
    {
      _id: "5",
      location: "Birmingham",
      country: "United Kingdom",
      jobTitle: "Mechanical Engineer",
      industry: "M&E & Building Services",
      salary: "£ 45,000 - 55,000 GBP",
    },
    {
      _id: "6",
      location: "Leeds",
      country: "United Kingdom",
      jobTitle: "Quantity Surveyor",
      industry: "Construction",
      salary: "£ 35,000 - 45,000 GBP",
    },
  ];

  // ✅ Responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth <= 480) {
        setItemsPerSlide(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // ✅ Group jobs based on items per slide
  const groupedOpportunities = [];
  for (let i = 0; i < opportunities.length; i += itemsPerSlide) {
    groupedOpportunities.push(opportunities.slice(i, i + itemsPerSlide));
  }

  const handleLearnMore = (jobId) => {
    navigate(`/job/${jobId}/apply`);
  };

  return (
    <section className="candidate-latest-opportunities">
      <div className="candidate-opportunities-container">
        <div className="candidate-opportunities-header">
          <h2 className="candidate-opportunities-title">LATEST OPPORTUNITIES</h2>
        </div>

        {/* ✅ Carousel Integration */}
        <div className="candidate-opportunities-carousel">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            showIndicators={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-prev"
                >
                  &#8249;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-next"
                >
                  &#8250;
                </button>
              )
            }
          >
            {groupedOpportunities.map((group, idx) => (
              <div key={idx} className="candidate-opportunities-slide">
                {group.map((opportunity) => (
                  <div
                    key={opportunity._id}
                    className="candidate-opportunity-card"
                  >
                    <div className="candidate-opportunity-location-tag">
                      <span className="candidate-opportunity-location">
                        {opportunity.location}
                      </span>
                      <span className="candidate-opportunity-country">
                        {opportunity.country}
                      </span>
                    </div>

                    <h3 className="candidate-opportunity-title">
                      {opportunity.jobTitle}
                    </h3>
                    <p className="candidate-opportunity-category">
                      {opportunity.industry}
                    </p>

                    <div className="candidate-opportunity-salary">
                      <span className="candidate-salary-range">
                        {opportunity.salary}
                      </span>
                    </div>

                    <button
                      className="candidate-opportunity-btn"
                      onClick={() => handleLearnMore(opportunity._id)}
                    >
                      Learn More &#8250;
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>

        <div className="candidate-see-all-container">
          <Button text="See all Jobs" onClick={() => navigate("/all-jobs")} />
        </div>
      </div>
    </section>
  );
};

export default CandidateLatestOpportunities;
