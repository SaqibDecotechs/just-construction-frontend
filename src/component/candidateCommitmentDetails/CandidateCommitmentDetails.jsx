import React from 'react';
import './candidateCommitmentDetails.css';

const CandidateCommitmentDetails = () => {
  return (
    <section className="candidate-commitment-details">
      <div className="candidate-details-container">
        <div className="candidate-details-content">
          <h2 className="candidate-details-title">OUR CANDIDATE COMMITMENT. WE WILL:</h2>
          
          <div className="candidate-details-grid">
            <div className="candidate-details-column">
              <ul className="candidate-details-list">
                <li>Respond to calls within 24 hours</li>
                <li>Reply to all emails within 48 hours</li>
                <li>Always give post-interview feedback</li>
                <li>Take you on the journey with regular updates</li>
                <li>Always treat you as an individual</li>
              </ul>
            </div>
            
            <div className="candidate-details-column">
              <ul className="candidate-details-list">
                <li>Only send your CV to approved businesses - its your data, not ours</li>
                <li>Your personal information will not be disclosed to any third parties at any point, unless authorised by you to aid in the search.</li>
                <li>Never contact your references without consent</li>
                <li>Do what we say we will – every single time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateCommitmentDetails;