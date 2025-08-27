import React from 'react';
import ActionBox from './ActionBox';
import { FaSearch, FaFileUpload, FaBell } from 'react-icons/fa';
import './candidateNextStep.css';

const CandidateNextStep = () => {
  const actionBoxes = [
    {
      id: 1,
      title: 'SEARCH JOBS',
      icon: <FaSearch />,
      link: '/all-jobs'
    },
    {
      id: 2,
      title: 'SUBMIT CV',
      icon: <FaFileUpload />,
      link: '#submit-cv'
    },
    {
      id: 3,
      title: 'JOB ALERTS',
      icon: <FaBell />,
      link: '#job-alerts'
    }
  ];

  return (
    <section className="candidate-next-step">
      <div className="candidate-next-step-container">
        <div className="candidate-next-step-content">
          <div className="candidate-next-step-left">
            <h2 className="candidate-next-step-title">Take the next step</h2>
            <p className="candidate-next-step-description">
              If you are a business looking to for your next hire, a candidate looking for a new 
              opportunity or just want industry information, get in touch.
            </p>
          </div>
          
          <div className="candidate-next-step-right">
            <div className="action-boxes-grid">
              {actionBoxes.map((box) => (
                <ActionBox
                  key={box.id}
                  title={box.title}
                  icon={box.icon}
                  link={box.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateNextStep;