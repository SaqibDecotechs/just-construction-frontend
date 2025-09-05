import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import './About.css'
import Footer from '../../component/footer/Footer'
import OurServiceCard from '../../component/ourServices/OurServicesCard'
import CounterSection from '../../component/aboutcounter/Aboutcounter'
import MarketServices from '../../component/ourServices/Marketservices'



const About = () => {
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
                        Since our inception, Just Construction Recruitment has grown into a
                        trusted consultancy with deep expertise across Construction, Mechanical &
                        Electrical, Building Envelopes, and Interiors. What started in Bromley,
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
                        title="JUST RECRUIT+"
                        text="By choosing a monthly subscription, you streamline your recruitment spending and benefit from improved search precision, stronger resources, and better cost efficiency."
                        onLearnMore={() => alert('Executive Search')}
                        showButton={false}
                    />
                    <OurServiceCard
                        title="RETAINED"
                        text="With two tiered options, you decide how much extra resource is committed to your search, determined by a percentage of the initial cost"
                        onLearnMore={() => alert('Contract Staffing')}
                        showButton={false}
                    />
                    <OurServiceCard
                        title="CONTINGENT"
                        text="With a contingent model, you’re only charged when we deliver — the fee applies only if we successfully fill your vacancy."
                        onLearnMore={() => alert('Permanent Staffing')}
                        showButton={false}
                    />
                </div>
            </div>

            <CounterSection />

            <section className="careers-hero">
                <div className="careers-overlay"></div>
                <div className="careers-content">
                    <h1>Careers at Just Construction</h1>
                    <p>
                        At the heart of our business are the people who make it thrive. We are
                        dedicated to investing in your future, giving you the platform to
                        excel, and offering rewards that motivate you to achieve your best.
                    </p>
                    <button className="careers-btn">Work for Us</button>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default About