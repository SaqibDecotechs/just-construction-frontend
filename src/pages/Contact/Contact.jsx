import React from 'react';
import './contact.css';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
// import { FaSearch, FaFileAlt, FaBullhorn } from "react-icons/fa";
import IndustryNews from '../../component/Contact/IndustryNews';
import CandidateNextStep from '../../component/candidateNextStep/CandidateNextStep';
// import "./NextStepSection.css";

const ContactUs = () => (
    <>
        <NavBar />
        <div className="contact-bg">
            <div className="contact-overlay">
                <div className="contact-container">
                    <form className="contact-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <textarea placeholder="Your Message" required />

                        <label className="checkbox-label">
                            <input type="checkbox" />
                            I’d like to receive updates and notifications via text.
                        </label>

                        <p className="consent-text">
                            By submitting this form, you agree to receive text messages from Just Construction Recruitment regarding job opportunities and updates.
                            Message frequency may vary. Standard message and data rates may apply. Reply with STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to opt out,
                            or HELP for assistance.
                        </p>

                        <label className="checkbox-label">
                            <input type="checkbox" required />
                            I have read and agree to the{" "}
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{" "}
                            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>.
                        </label>
                        <div className="btn-s">
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                    </form>

                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        {/* <h2>Get in Touch</h2> */}
                        <p>
                            Have questions or need support? We’re here to help you with your career, business, or team-building needs.
                        </p>

                        <h3>US Office</h3>
                        <p>Call us at: 332-236-9435</p>
                        <p>
                            <a
                                href="https://calendly.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='contact-link'
                            >
                                Schedule a 30-minute consultation with one of our US team members
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.407971563112!2d-97.732617!3d30.263813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59f9eeb0f13%3A0xf1c7e2c0e4f327e6!2s924%20E%207th%20St%20%23200%2C%20Austin%2C%20TX%2078702%2C%20USA!5e0!3m2!1sen!2sus!4v1693705123456!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <CandidateNextStep />

        <IndustryNews />

        <Footer />
    </>
);

export default ContactUs;
