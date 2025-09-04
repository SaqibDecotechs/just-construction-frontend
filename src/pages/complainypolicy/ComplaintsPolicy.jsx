import React from "react";
import "./Complaintspolicy.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../../component/footer/Footer";
import NavBar from "../../component/navbar/NavBar";

const ComplaintsPolicy = () => {
  return (
    <div className="complaints-policy">
      <NavBar />
      {/* Hero Section */}
      <section className="complaints-hero">
        <div className="complaints-overlay-content">
          <h1 className="complaints-title">Complaints Policy</h1>
          <div className="hero-arrow">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="complaints-content">
        <div className="complaints-container">
          <h2>Our Commitment</h2>
          <p>
            At Just Construction, we strive to provide the highest quality of
            service to our clients and candidates. If you feel we have fallen
            short, we welcome your feedback. Every complaint is taken seriously
            and treated as an opportunity to improve our services.
          </p>

          <h2>How to Make a Complaint</h2>
          <p>
            If you wish to make a formal complaint, you can write to us via
            email or post:
          </p>
          <p>
            <strong>Address:</strong> Just Construction Recruitment Ltd, Alliance
            House, 29 London Road, BR1 1DG
            <br />
            <strong>Email:</strong> office@just-constructionrec.com
            <br />
            <strong>Phone:</strong> 020 3 405 3186
          </p>

          <h2>Our Procedure</h2>
          <ul>
            <li>
              We will acknowledge receipt of your complaint in writing (email or
              letter) within 5 working days.
            </li>
            <li>
              You will be informed of the dedicated team member handling your
              case.
            </li>
            <li>
              Your complaint will be logged and investigated. This may involve:
              <ul>
                <li>
                  Reviewing your records and related correspondence to establish
                  the facts.
                </li>
                <li>
                  Speaking with relevant staff members for clarification.
                </li>
                <li>
                  Consulting senior management where necessary.
                </li>
              </ul>
            </li>
            <li>
              We aim to fully investigate and resolve complaints within 14
              working days.
            </li>
            <li>
              A full written response will be provided, including supporting
              documents if required.
            </li>
          </ul>

          <h2>Escalation Process</h2>
          <p>
            If you are not satisfied with the outcome of your complaint, you may
            request escalation. A senior manager will review your case and
            respond directly with their findings. Should you remain unsatisfied,
            you can contact the relevant industry trade association for further
            assistance.
          </p>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default ComplaintsPolicy;
