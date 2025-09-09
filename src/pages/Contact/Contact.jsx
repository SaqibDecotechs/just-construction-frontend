import React from 'react';
import './contact.css';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import IndustryNews from '../../component/Contact/IndustryNews';
import CandidateNextStep from '../../component/candidateNextStep/CandidateNextStep';
import { useSelector } from "react-redux";
import { selectSelectedCountry } from "../../store/slices/countrySlice";

const ContactUs = () => {
    const selectedCountry = useSelector(selectSelectedCountry);

    return (
        <>
            <NavBar />

            <div className={selectedCountry === "UK" ? "contact-bg-uk" : "contact-bg"}>
                <div className="contact-overlay">
                    <div className="contact-container">

                        {/* FORM START */}
                        {selectedCountry === "US" ? (
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
                                    <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>.
                                </label>

                                <div className="btn-s">
                                    <button type="submit" className="submit-btn">Submit</button>
                                </div>
                            </form>
                        ) : (
                            <form className="contact-form-uk">
                                <input type="text" placeholder="Name" required />
                                <input type="email" placeholder="Email" required />
                                <input type="tel" placeholder="Phone" required />
                                <textarea placeholder="Message" required />

                                <p className="consent-text-uk">
                                    View our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> &{" "}
                                    <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer"> Terms & Conditions</a>
                                </p>

                                <label className="checkbox-label-uk">
                                    <input className="checkbox-input-uk" type="checkbox" required /> I agree to the{" "}
                                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &{" "}
                                    <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> (Required)
                                </label>

                                <div className="btn-s">
                                    <button type="submit" className="submit-btn-uk">Submit</button>
                                </div>
                            </form>
                        )}
                        {/* FORM END */}

                        {/* CONTACT INFO START */}
                        <div className="contact-info">
                            <h2>Contact Us</h2>
                            {selectedCountry === "US" ? (
                                <>
                                    <p>
                                        Looking for career guidance or recruitment support in the US? Get in touch with our team today.
                                    </p>
                                    <h3>US Office</h3>
                                    <p>Call us at: 332-236-9435</p>
                                    <p>
                                        <a
                                            href="https://calendly.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-link"
                                        >
                                            Schedule a 30-minute consultation with one of our US team members
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        Need recruitment assistance in the UK? Our team is ready to support your business and career needs.
                                    </p>
                                    <h3>UK Office</h3>
                                    <p>0203 405 31 86</p>
                                    <p>
                                        <a
                                            href="https://calendly.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-link"
                                        >
                                            Click here to book a 30 mins consult with one of our UK Team
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                        {/* CONTACT INFO END */}
                    </div>
                </div>
            </div>

            {/* MAP only for US (UK me nahi chahiye) */}
            {selectedCountry === "US" ? (
                <div className="map-container">
                    {/* US Map */}
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
            ) : (
                <div className="map-container">
                    {/* UK Map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.682244431417!2d0.0096018!3d51.4069721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9d924f6d4df%3A0x65da3b271e96aaf4!2sAlliance%20House%2C%2029%20London%20Rd%2C%20Bromley%20BR1%201DG%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1693705123456!5m2!1sen!2suk"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: "16px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            )}

            <CandidateNextStep />
            <IndustryNews />
            <Footer />
        </>
    );
};

export default ContactUs;
