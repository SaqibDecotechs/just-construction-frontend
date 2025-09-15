import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import './About.css'
import Footer from '../../component/footer/Footer'
import OurServiceCard from '../../component/ourServices/OurServicesCard'
import CounterSection from '../../component/aboutcounter/Aboutcounter'
import MarketServices from '../../component/ourServices/Marketservices'
import { useNavigate } from 'react-router-dom'
import Button from '../../component/button'



const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section className="about-us-hero">
                <NavBar />
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
                    <div className="hero-content-about">
                        <h1>ABOUT US</h1>
                        <p>
                            Our vision is to build a recruitment consultancy that truly stands out —
                            one that redefines the experience with a fresh and meaningful approach.
                        </p>
                    </div>

                </div>
                <div className="scroll-down">
                    <span>&#x25BC;</span>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <p className="about-text">
                        From the very beginning, our mission has been to challenge the negative
                        perceptions of recruiters by building a business grounded in our core
                        values: <strong>Honesty, Integrity, and Transparency</strong>.
                    </p>
                    <p className="about-text">
                        Since our inception, Fazil Construction Recruitment has grown into a
                        trusted consultancy with deep expertise across Construction, Mechanical &
                        Electrical, Building Envelopes, and Interiors. What started in ,
                        Kent, has now expanded to deliver recruitment solutions across the UK,
                        Europe, and the United States.
                    </p>
                    <p className="about-text">
                        Our continued success comes from keeping employee development at the
                        centre of everything we do. To be true market specialists, we must
                        understand the industries we serve. That’s why every member of our team
                        undergoes continuous training and development — ensuring they perform at
                        their very best.
                    </p>
                </div>
            </section>



            <div style={{ marginBottom: '60px' }}>
                <MarketServices />
            </div>

            <div className="ourservices-content container">

                <h1 className="service-cards-heading">Our Services</h1>
                <div className="service-cards-row">
                    <OurServiceCard
                        title="RECRUIT+"
                        text="Recruit+ offers a subscription-based recruitment model tailored for construction firms. With a fixed monthly fee, you gain predictable costs, end-to-end hiring support, dedicated account management, and retention strategies — making recruitment streamlined, cost-effective, and scalable."
                        showButton={false}
                    />

                    <OurServiceCard
                        title="RETAINED"
                        text="Our Retained Search gives you two tiered options to choose the level of resource dedicated to your hiring. It’s a tailored, service-led solution ideal for senior or specialist roles, offering high commitment, discounts on multiple vacancies, and peace of mind with guarantee periods — ensuring we find you the right person to make an impact from day one."
                        showButton={false}
                    />

                    <OurServiceCard
                        title="CONTINGENT"
                        text="Our Contingent model means you only pay when we successfully fill your role. It’s ideal for frequent or less specialist positions, offering flexibility, discounted rates for multiple placements, and peace of mind with guarantee periods — giving you a cost-effective way to scale your team."
                        showButton={false}
                    />
                </div>
            </div>

            <CounterSection />

            <section className="careers-hero">
                <div className="careers-overlay"></div>
                <div className="careers-content">
                    <h1>Careers at Fazil Construction</h1>
                    <p>
                        At the heart of our business are the people who make it thrive. We are
                        dedicated to investing in your future, giving you the platform to
                        excel, and offering rewards that motivate you to achieve your best.
                    </p>
                    <Button text="Work for Us" onClick={() => navigate("/join-us")} />
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default About