import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './meetTheTeam.css';

const MeetTheTeam = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const teamMembers = [
    {
      id: 1,
      name: 'Jamie Trevett',
      title: 'CEO',
      location: 'UK, USA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Tony Robbins',
      title: 'COO',
      location: 'UK, USA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Lisa Trevett',
      title: 'CFO',
      location: 'UK',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e31b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'John Smith',
      title: 'CTO',
      location: 'USA',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      title: 'Head of HR',
      location: 'UK, USA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Mike Wilson',
      title: 'Operations Director',
      location: 'USA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ];

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth <= 480) {
        setItemsPerSlide(1); // Mobile: 1 member
      } else if (window.innerWidth <= 768) {
        setItemsPerSlide(2); // Tablet: 2 members
      } else {
        setItemsPerSlide(3); // Desktop: 3 members
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Group team members based on current items per slide
  const groupedMembers = [];
  for (let i = 0; i < teamMembers.length; i += itemsPerSlide) {
    groupedMembers.push(teamMembers.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="meet-the-team">
      <div className="team-container">
        
        {/* Header with lines */}
        <div className="team-header">
          <div className='team-line'>
          <h2 className="team-main-title">MEET THE TEAM</h2>
          </div>
        {/* Bordered description */}
        <div className="team-description-wrapper">
          <p className="team-description"> 
            Here we are, like a line-up of the world's most wanted recruiters. We have expertise in a 
            variety of construction industries and take pride in providing a high-quality service.
          </p>
        </div>
        </div>


        {/* Team carousel */}
        <div className="team-carousel-wrapper">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            showIndicators={false}
            className="team-carousel"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="team-carousel-arrow team-carousel-arrow-prev"
                >
                  &#8249;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="team-carousel-arrow team-carousel-arrow-next"
                >
                  &#8250;
                </button>
              )
            }
          >
            {groupedMembers.map((group, groupIndex) => (
              <div key={groupIndex} className="team-slide">
                <div 
                  className="team-grid"
                  style={{ '--items-per-slide': itemsPerSlide }}
                >
                  {group.map((member) => (
                    <div key={member.id} className="team-member-card">
                      <div className="member-photo-container">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="member-photo" 
                        />
                      </div>
                      
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                      <p className="member-location">{member.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Meet the team button */}
        <div className="team-button-container">
          <button className="meet-team-btn">Meet the team</button>
        </div>
        
      </div>
    </section>
  );
};

export default MeetTheTeam;