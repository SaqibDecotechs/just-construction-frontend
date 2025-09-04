import React, { useState } from 'react';
import './CaseStudiesSlider.css';

const caseStudies = [
    {
        title: "UK M&E Contractor",
        description: "Challenge: A mid-sized M&E contractor was struggling to recruit an Electrical Project Manager for their...",
        button: "READ MORE",
    },
    {
        title: "US General Contractor",
        description: "Based in the US, a contractor faced the challenge of quickly ramping up for a new project and sought skilled workers...",
        button: "READ MORE",
    },
    {
        title: "EU Civil Engineering",
        description: "A European-based civil engineering firm encountered recruitment difficulties when trying to fill specialist roles for a bridge project...",
        button: "READ MORE",
    },
];

const CaseStudiesSlider = () => {
    const [current, setCurrent] = useState(0);

    const goTo = (idx) => setCurrent(idx);
    const next = () => setCurrent((prev) => (prev + 1) % caseStudies.length);

    return (
        <div className="case-slider">
            <div className="case-slider-overlay">
                <div className="case-slider-left">
                    <h2>Driving value together<br />with our partners at every step</h2>
                    <button className="case-slider-btn" onClick={next}>
                        More Case Studies
                    </button>
                </div>
                <div className="case-slider-right-outer">
                    <div
                        className="case-slider-track"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {caseStudies.map((item, idx) => (
                            <div className="case-slider-slide" key={idx}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <button className="case-slider-btn">{item.button}</button>
                            </div>
                        ))}
                    </div>
                    <div className="case-slider-dots">
                        {caseStudies.map((_, idx) => (
                            <span
                                key={idx}
                                className={`dot${idx === current ? ' active' : ''}`}
                                onClick={() => goTo(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CaseStudiesSlider;