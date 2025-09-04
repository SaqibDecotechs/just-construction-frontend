import React from "react";
import "./Terms.css";
import NavBar from "../../component/navbar/NavBar";
import Footer from "../../component/footer/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";

const TermsAndConditions = () => {
    return (
        <>
            <NavBar />
            <section className="terms-hero">
                <div className="terms-hero-overlay">
                    <h1>Terms & Conditions</h1>
                    <p>Understand the rules and policies for using our website</p>
                    <div className="hero-arrow">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </section>

            <section className="terms-container">
                <h2>Website Usage Policy</h2>
                <p>
                    By accessing our website, you agree to follow the terms outlined here,
                    along with our <a href="/privacy-policy">Privacy Policy</a>,{" "}
                    <a href="/cookie-policy">Cookie Policy</a>, and other relevant policies.
                    Please ensure all information you provide is accurate and truthful.
                </p>

                <h2>About Us</h2>
                <p>
                    This website is operated by <strong>Just Construction Recruitment Ltd</strong>,
                    registered in England and Wales (Company No. 08131040). Our registered
                    office is at 1 & 2 High St, Westerham TN16 1AH, with our trading address
                    located at 29 London Road, Bromley, BR1 1DG. VAT No. 139805686.
                </p>
                <p>
                    As a proud member of The REC, we comply with the Codes of Professional
                    Practice and the Conduct of Employment Agencies and Employment Business Regulations 2003.
                </p>

                <h2>Changes to Our Terms</h2>
                <p>
                    We may update or modify these terms at any time. Please revisit this
                    page periodically to stay informed about the latest updates.
                </p>

                <h2>Website Availability</h2>
                <p>
                    Our website is provided free of charge. While we aim for continuous access,
                    we cannot guarantee that the site will always be available or error-free.
                    We reserve the right to suspend, modify, or withdraw access without prior notice.
                </p>

                <h2>Account Security</h2>
                <p>
                    If you create an account, you are responsible for safeguarding your login
                    details. Do not share your password with others. If you suspect unauthorized
                    access, notify us immediately at{" "}
                    <a href="mailto:office@just-constructionrec.com">
                        office@just-constructionrec.com
                    </a>.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                    All content on this site, including text, graphics, and media, is protected
                    by copyright and intellectual property laws. You may download or print
                    content for personal use only and must not use it commercially without
                    our written consent.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    We are not liable for losses or damages caused by reliance on our website
                    content or by disruptions such as viruses or cyber-attacks. The content
                    is provided for general information only and should not be considered
                    professional advice.
                </p>

                <h2>Uploading Content</h2>
                <p>
                    Any content you upload to our website must comply with our Acceptable Use
                    Policy. You retain ownership of your content but grant us a license to
                    use and share it as necessary to operate our services.
                </p>

                <h2>Viruses and Security</h2>
                <p>
                    You are responsible for ensuring your devices are secure. Misuse of the
                    website, such as introducing harmful software or attempting unauthorized
                    access, is strictly prohibited and may be reported to authorities.
                </p>

                <h2>Links to Our Site</h2>
                <p>
                    You may link to our homepage fairly and legally, without suggesting any
                    association or endorsement. Framing our website or linking in a misleading
                    way is not permitted.
                </p>

                <h2>Applicable Law</h2>
                <p>
                    These terms are governed by English law. Any disputes will fall under the
                    jurisdiction of the courts of England and Wales, with exceptions for
                    residents of Scotland or Northern Ireland.
                </p>

                <h2>Prize Draw Terms</h2>
                <p>
                    From time to time, we may run prize draws. These competitions are free to
                    enter and open to eligible participants. Winners are selected randomly and
                    will be notified via LinkedIn or email. Prizes are non-transferable and
                    subject to availability.
                </p>

                <h2>SMS Notifications</h2>
                <p>
                    By opting in to receive SMS updates, you agree to receive job reminders,
                    interview alerts, and other employment-related messages. You can opt out
                    at any time by replying "STOP" to our messages or contacting{" "}
                    <a href="mailto:office@just-constructionrec.com">
                        office@just-constructionrec.com
                    </a>.
                </p>
                <p>
                    Standard message and data rates may apply. Your personal details will not
                    be shared with third parties for marketing purposes.
                </p>
            </section>

            <Footer />
        </>
    );
};

export default TermsAndConditions;
