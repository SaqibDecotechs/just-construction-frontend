import React, { useState } from 'react';
import './CaseStudiesSlider.css';

const caseStudies = [
    {
        title: "UK M&E Contractor",
        description: "Situation A mid-sized M&E contractor was finding it hard to attract an Electrical Project manager to their...",
        button: "READ MORE",
    },
    {
        title: "US General Contractor",
        description: "A US-based contractor needed to scale up quickly for a new project and required skilled labor...",
        button: "READ MORE",
    },
    {
        title: "EU Civil Engineering",
        description: "A European civil engineering firm was struggling to fill specialist roles for a bridge project...",
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
                    <h2>Working with our partners<br />to deliver value at every turn</h2>
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