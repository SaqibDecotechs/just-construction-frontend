import React from 'react';
import { Link } from 'react-router-dom';

const ActionBox = ({ title, icon, link }) => {
  const isExternalLink = link.startsWith('#');

  const content = (
    <div className="action-box">
      <div className="action-box-icon">
        {icon}
      </div>
      <h3 className="action-box-title">{title}</h3>
    </div>
  );

  if (isExternalLink) {
    return (
      <a href={link} className="action-box-link">
        {content}
      </a>
    );
  }

  return (
    <Link to={link} className="action-box-link">
      {content}
    </Link>
  );
};

export default ActionBox;