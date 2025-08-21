import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './testimonials.css';

const Testimonials = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const testimonials = [
    {
      id: 1,
      quote: "One of the best, most personable & knowledgeable client I've ever dealt with in my working career. They understand candidates in tough times of hunger & need with couldn't recommend highly enough. Guy by far shines as his mori than allegiance.hey understand candidates in tough times of hunger & need with couldn't recommend highly enough. Guy by far shines as his mori than allegiance."
    },
    {
      id: 2,
      quote: "Having been both a candidate and Client I can highly recommend Darren, very straight talking and honest - unlike most in this field."
    },
    {
      id: 3,
      quote: "Athy was polite and helpful. He followed up without pressure and assisted with interview prep."
    },
    {
      id: 4,
      quote: "Professional service from start to finish. The team really understood our requirements and delivered excellent candidates."
    },
    {
      id: 5,
      quote: "Outstanding communication throughout the recruitment process. Made the whole experience smooth and stress-free."
    },
    {
      id: 6,
      quote: "Excellent industry knowledge and genuine care for both clients and candidates. Highly recommended."
    }
  ];

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth <= 480) {
        setItemsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth <= 768) {
        setItemsPerSlide(2); // Tablet: 2 cards
      } else {
        setItemsPerSlide(3); // Desktop: 3 cards
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Group testimonials based on current items per slide
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Here is what some of our client's & candidates have to say about their experience working with us
          </h2>
        </div>
        
        <div className="testimonials-carousel-wrapper">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={8000}
            showIndicators={false}
            className="testimonials-carousel"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-prev"
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
                  className="carousel-arrow carousel-arrow-next"
                >
                  &#8250;
                </button>
              )
            }
          >
            {groupedTestimonials.map((group, groupIndex) => (
              <div key={groupIndex} className="testimonials-slide">
                <div 
                  className="testimonials-grid"
                  style={{ '--items-per-slide': itemsPerSlide }}
                >
                  {group.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                      <div className="testimonial-quote">
                        <p>"{testimonial.quote}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;