import React from "react";
import "./Privacypolicy.css";
import Footer from "../../component/footer/Footer";
import NavBar from "../../component/navbar/NavBar";
import { MdKeyboardArrowDown } from "react-icons/md";



const PrivacyPolicy = () => {
    return (

        <div className="privacy-page">
            <NavBar />
            {/* Hero Section */}
            <section className="privacy-hero">
                <div className="privacy-overlay-content">
                    <h1 className="privacy-title">Privacy Policy</h1>
                    <div className="hero-arrow">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="privacy-content">
                <div className="privacy-container">
                    <h2>Purpose of Processing and Legal Basis</h2>
                    <p>
                        Just Construction Recruitment collects and processes personal data
                        (which may include sensitive data) for the purpose of providing
                        work-finding services. The legal grounds for processing are based on
                        legitimate interests, contractual requirements, and compliance with
                        employment legislation.
                    </p>

                    <h2>Legitimate Interests</h2>
                    <p>
                        We process candidate and employee information in order to evaluate
                        suitability, strengths, and cultural fit for potential roles. Data
                        may be obtained from:
                    </p>
                    <ul>
                        <li>Publicly available CV databases and professional platforms</li>
                        <li>Direct engagement with candidates</li>
                        <li>Assessment results, interviews, and references</li>
                        <li>Other lawful and relevant sources</li>
                    </ul>
                    <p>
                        Information is shared with clients only with the candidate’s
                        permission and for recruitment purposes.
                    </p>

                    <h2>Recipients of Data</h2>
                    <p>
                        Your personal information may be shared with trusted recipients,
                        such as:
                    </p>
                    <ul>
                        <li>
                            <strong>Potential employers</strong> – to determine suitability
                            for vacancies
                        </li>
                        <li>
                            <strong>CRM system (Invenias)</strong> – a secure database where
                            your information is managed
                        </li>
                    </ul>

                    <h2>Statutory / Contractual Requirement</h2>
                    <p>
                        In some cases, personal data is required by law or contractual
                        agreement. If data is not provided:
                    </p>
                    <ul>
                        <li>
                            Employers may be unable to progress your application in line with
                            their internal hiring policies
                        </li>
                        <li>
                            Employment offers may be withdrawn if the required data cannot be
                            processed
                        </li>
                    </ul>

                    <h2>Data Retention</h2>
                    <p>
                        Personal data will only be retained for as long as necessary to meet
                        legal, contractual, or business requirements. Examples include:
                    </p>
                    <ul>
                        <li>
                            Work-seeker records: at least one year under The Conduct of
                            Employment Agencies and Employment Businesses Regulations 2003
                        </li>
                        <li>
                            Payroll, holiday, sick pay, and pension records: as required by
                            HMRC and related legislation
                        </li>
                        <li>
                            Contracts and engagement terms: up to six years, in line with the
                            Limitation Act 1980
                        </li>
                    </ul>
                    <p>
                        If you request removal of your data, we will securely delete it
                        except for records linked to ongoing or recently completed
                        assignments (kept for up to 6 months before final removal).
                    </p>

                    <h2>Your Rights</h2>
                    <p>
                        Under data protection laws, you have the right to:
                    </p>
                    <ul>
                        <li>Be informed about how your data is processed</li>
                        <li>Request access to your personal information</li>
                        <li>Ask for corrections to inaccurate data</li>
                        <li>Request deletion of your data in certain circumstances</li>
                        <li>Restrict how your data is processed</li>
                        <li>Request portability of your data</li>
                        <li>Object to data processing based on legitimate interests</li>
                        <li>
                            Opt out of automated decision-making or profiling
                        </li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                    <p>
                        To exercise your rights, please contact Jamie Trevett at{" "}
                        <a href="mailto:j.trevett@just-group.co.uk">
                            j.trevett@just-group.co.uk
                        </a>{" "}
                        or call 0203 405 3186.
                    </p>

                    <h2>Complaints and Queries</h2>
                    <p>
                        If you have concerns about how your data is handled, please contact
                        us. You may also raise a complaint with the{" "}
                        <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
                            Information Commissioner’s Office (ICO)
                        </a>{" "}
                        on 0303 123 1113.
                    </p>

                    <h2>Telephone Recording Policy</h2>
                    <p>
                        Calls may be recorded for training, monitoring, and reference
                        purposes. Recordings are normally kept for no longer than 120 days,
                        unless further investigation requires extended retention.
                    </p>
                    <p>
                        Recordings may be shared with solicitors acting on our behalf but
                        are not transferred outside of the UK or EU. No automated profiling
                        is carried out using these recordings.
                    </p>

                    <h2>SMS Terms and Conditions</h2>
                    <h3>Introduction</h3>
                    <p>
                        We may send SMS notifications relating to job opportunities,
                        interview confirmations, and essential employment updates.
                    </p>

                    <h3>Use of Third Parties</h3>
                    <p>
                        Personal data may be shared with third-party service providers (such
                        as platform providers and phone companies) to deliver SMS
                        notifications. Your opt-in information will never be sold or shared
                        for marketing purposes.
                    </p>

                    <h3>Opt-In and Consent</h3>
                    <p>
                        By providing your phone number and opting in, you consent to receive
                        recurring automated SMS or MMS messages. Message frequency is
                        typically 1–5 per week. Consent is not required to apply for jobs.
                    </p>

                    <h3>Opt-Out Instructions</h3>
                    <p>
                        You may opt out at any time by replying “STOP” to any message or by
                        contacting us at{" "}
                        <a href="mailto:office@just-constructionrec.com">
                            office@just-constructionrec.com
                        </a>
                        . After opting out, you will receive one final confirmation message.
                    </p>

                    <h3>Help and Support</h3>
                    <p>
                        For assistance with SMS services, reply “HELP” to any message or
                        email us at{" "}
                        <a href="mailto:office@just-constructionrec.com">
                            office@just-constructionrec.com
                        </a>
                        .
                    </p>

                    <h3>Message and Data Rates</h3>
                    <p>
                        Standard network charges may apply. Please check with your mobile
                        provider regarding data and text costs.
                    </p>

                    <h3>Contact Information</h3>
                    <p>
                        For questions about this Privacy Policy or SMS Terms, contact us at:
                    </p>
                    <ul>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:office@just-constructionrec.com">
                                office@just-constructionrec.com
                            </a>
                        </li>
                        <li>
                            <strong>Phone:</strong> +1 332-236-9435
                        </li>
                        <li>
                            <strong>Address:</strong> 5900 Balcones Drive, STE 100, Austin,
                            TX, 78731, USA
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
