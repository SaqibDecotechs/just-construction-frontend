import React from 'react';
import './candidateCommitmentDetails.css';

const CandidateCommitmentDetails = () => {
  return (
    <section className="candidate-commitment-details">
      <div className="candidate-details-container">
        <div className="candidate-details-content">
          <h2 className="candidate-details-title">What Our Candidates Can Count On:</h2>
          
          <div className="candidate-details-grid">
            <div className="candidate-details-column">
              <ul className="candidate-details-list">
                <li>We commit to returning your calls within 24 hours.</li>
                <li>We commit to replying to all emails within 48 hours.</li>
                <li>We will always provide feedback after every interview.</li>
                <li>We’ll keep you informed with regular updates throughout the journey.</li>
                <li>We will always treat you as an individual, not just a candidate.</li>
              </ul>
            </div>
            
            <div className="candidate-details-column">
              <ul className="candidate-details-list">
                <li>We will only share your CV with approved businesses — your data belongs to you, not us.</li>
                <li>Your personal information will never be shared with third parties unless you authorise it to support your job search</li>
                <li>We will never contact your references without your consent.</li>
                <li>We keep our word — every single time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateCommitmentDetails;