import React from 'react';
import ActionBox from './ActionBox';
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiFilesBold } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import './candidateNextStep.css';

const CandidateNextStep = () => {
  const actionBoxes = [
    {
      id: 1,
      title: 'SEARCH JOBS',
      icon: <AiOutlineFileSearch />,
      link: '/all-jobs'
    },
    {
      id: 2,
      title: 'SUBMIT CV',
      icon: <PiFilesBold />,
      link: '#submit-cv'
    },
    {
      id: 3,
      title: 'JOB ALERTS',
      icon: <GrAnnounce />,
      link: '#job-alerts'
    }
  ];

  return (
    <section className="candidate-next-step">
      <div className="candidate-next-step-container">
        <div className="candidate-next-step-content">
          <div className="candidate-next-step-left">
            <h2 className="candidate-next-step-title">Move Forward with Us</h2>
            <p className="candidate-next-step-description">
             Whether you’re a business searching for your next hire, a candidate seeking a new opportunity, or simply looking for industry insights — we’d love to hear from you.
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