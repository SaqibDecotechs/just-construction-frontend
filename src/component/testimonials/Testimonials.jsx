import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './testimonials.css';

const Testimonials = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

const testimonials = [
  {
    id: 1,
    quote:
      "By far one of the most professional and personable teams I’ve worked with. They truly understand candidates’ needs during challenging times and always go above and beyond. Highly recommended."
  },
  {
    id: 2,
    quote:
      "Having experienced them as both a candidate and a client, I can say with confidence that they are refreshingly honest and straightforward – a rare quality in this industry."
  },
  {
    id: 3,
    quote:
      "Athy was polite, supportive, and helpful throughout the process. His guidance with interview preparation made a real difference."
  },
  {
    id: 4,
    quote:
      "A highly professional service from start to finish. The team took the time to understand our requirements and delivered excellent candidates."
  },
  {
    id: 5,
    quote:
      "Outstanding communication at every stage of the recruitment process. They made the whole experience smooth and stress-free."
  },
  {
    id: 6,
    quote:
      "Their industry knowledge is second to none. It’s clear they genuinely care about both clients and candidates. I wouldn’t hesitate to recommend them."
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
What our clients and candidates say about working with us
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