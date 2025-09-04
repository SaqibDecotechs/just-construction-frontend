import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './GdprCompliance..css'
import Footer from '../../component/footer/Footer'
import NavBar from '../../component/navbar/NavBar'

const GdprCompliance = () => {
    return (
        <div>
            <NavBar />
            <div className="gdpr-hero">
                <div className="gdpr-overlay gdpr-overlay-content">
                    <h1 className="gdpr-title">GDPR/Data Protection Compliance Statement</h1>
                    <div className="hero-arrow">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </div>
            <section className="gdpr-content">
                <div className="gdpr-container">
                    <h2>Introduction</h2>
                    <p>
                        At Just Construction Recruitment, we are fully committed to protecting the
                        privacy and personal data of all individuals we work with. In line with
                        the Data Protection Act and the EU General Data Protection Regulation
                        (GDPR), we ensure that your information is collected, stored, and managed
                        responsibly at all times.
                    </p>
                    <p>
                        As a recruitment business, we process both personal and sensitive data to
                        deliver our services effectively. This includes storing information for
                        specific periods as required by law and business needs. Our goal is to
                        manage this responsibly while giving you confidence that your information
                        is in safe hands.
                    </p>

                    <h2>Our Responsibilities</h2>
                    <p>We act as a Data Controller and Data Processor. This means we:</p>
                    <ul>
                        <li>Collect and process personal data only where necessary.</li>
                        <li>
                            Store information securely using appropriate technical and
                            organizational safeguards.
                        </li>
                        <li>
                            Use your data only for recruitment purposes and in line with our legal
                            obligations.
                        </li>
                        <li>Retain data only for as long as it is lawfully required.</li>
                    </ul>

                    <h2>What Data We Collect</h2>
                    <p>The type of information we may process includes:</p>
                    <ul>
                        <li>Contact details (name, email address, phone number).</li>
                        <li>Professional details (CV, qualifications, skills, experience).</li>
                        <li>
                            Employment preferences (desired roles, locations, salary expectations).
                        </li>
                        <li>
                            Sensitive data (where relevant and permitted, such as right-to-work
                            documents).
                        </li>
                    </ul>

                    <h2>Why We Process Your Data</h2>
                    <p>Your data is processed to:</p>
                    <ul>
                        <li>Match you with relevant job opportunities.</li>
                        <li>
                            Communicate with you regarding applications, interviews, and placements.
                        </li>
                        <li>
                            Meet contractual, legal, or regulatory requirements in the recruitment
                            process.
                        </li>
                        <li>Maintain accurate business and employment records.</li>
                    </ul>

                    <h2>Your Rights Under GDPR</h2>
                    <p>You have the following rights regarding your personal information:</p>
                    <ul>
                        <li>
                            <strong>Access:</strong> Request a copy of the data we hold about you.
                        </li>
                        <li>
                            <strong>Correction:</strong> Ask us to amend or update inaccurate data.
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request removal of your data when it is no
                            longer required.
                        </li>
                        <li>
                            <strong>Restriction:</strong> Limit how we process your data in certain
                            circumstances.
                        </li>
                        <li>
                            <strong>Portability:</strong> Obtain your data in a structured format
                            for transfer elsewhere.
                        </li>
                        <li>
                            <strong>Objection:</strong> Stop certain uses of your data, such as
                            marketing communications.
                        </li>
                    </ul>

                    <h2>How We Protect Your Data</h2>
                    <p>
                        Security is central to our data protection approach. We use strong
                        security measures including encryption, access controls, and regular
                        monitoring to safeguard against unauthorized access, misuse, or loss of
                        information.
                    </p>

                    <h2>Sharing Your Data</h2>
                    <p>
                        We may share your data with trusted third parties such as clients,
                        payroll providers, or compliance services — but only when necessary for
                        recruitment purposes and always under strict confidentiality agreements.
                        Your data is never sold to external organizations.
                    </p>

                    <h2>Data Retention</h2>
                    <p>
                        Personal data is kept only for as long as required by law, industry
                        regulations, or our business operations. Once data is no longer needed, it
                        is securely deleted or anonymized.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this GDPR Compliance Statement or wish to
                        exercise your rights, please contact our Data Protection Officer at:
                    </p>
                    <p>
                        <strong>Email:</strong> compliance@justconstruction.com
                        <br />
                        <strong>Phone:</strong> +44 (0)20 1234 5678
                    </p>
                </div>
            </section>

            <Footer />
        </div>


    )
}

export default GdprCompliance