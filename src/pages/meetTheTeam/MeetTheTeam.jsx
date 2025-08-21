import React from 'react';
import NavBar from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import './meetTheTeam.css';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jemie Powell",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Tony Robinson",
      position: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Lisa Francis",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612cf71?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Shane Everest",
      position: "Director - Regional and International",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Ellis Morris",
      position: "Regional Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "David Elliott",
      position: "Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Daniel Robbins",
      position: "Regional Manager",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Sam Smith",
      position: "Regional Manager",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Alfie Forgehott",
      position: "Consultant",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "George Williams",
      position: "Director",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Ben Greenfield",
      position: "Regional Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Natasha Marshall",
      position: "Regional Manager - International",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 13,
      name: "James Barrett-Morrison",
      position: "Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="meet-team-page">
      <NavBar />
      
      <div className="meet-team-hero">
        <div className="hero-overlay hero-overlay-meet">
          <h1 className="hero-title">Meet the Team</h1>
          <p className="hero-subtitle">
            Get to know the engine that makes Just Construction one of the leading providers of recruitment in the construction industry.
          </p>
          <p className="hero-tagline">
            WE ARE HIGHLY SKILLED AND READILY AVAILABLE TO HELP YOU BEGIN YOUR JOURNEY.
          </p>
          <div className="hero-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 16l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="meet-team-content">
        <div className="team-container">
          <div className="team-section">
            <h2 className="team-section-title">MEET THE TEAM</h2>
            
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="team-member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-position">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;