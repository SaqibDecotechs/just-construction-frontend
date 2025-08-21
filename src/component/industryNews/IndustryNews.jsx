import React from 'react';
import './industryNews.css';
import Button from '../button';

const IndustryNews = () => {
  const newsArticles = [
    {
      id: 1,
      image: 'https://lirp.cdn-website.com/2cce4485/dms3rep/multi/opt/Just+An+Idea-1920w.png',
      title: 'Robots as Site: What Automation Really Means for Skilled Trades in 2025',
      description: 'Robots aren\'t replacing skilled workers; they\'re giving them more tools. Across the UK and US construction sites, automation is speeding up delivery, reduce injury, and stay competitive.',

    },
    {
      id: 2,
      image: 'https://lirp.cdn-website.com/2cce4485/dms3rep/multi/opt/Just+An+Idea-1920w.png',
      title: 'Immigration Policy Shifts Mean Proactive Workforce Planning Is Essential',
      description: 'The labour shortage in construction is nothing new. But new immigration crackdowns and increasing demand for skilled workers are making it worse, and faster than most firms are.',
    },
    {
      id: 3,
      image: 'https://lirp.cdn-website.com/2cce4485/dms3rep/multi/opt/Just+An+Idea-1920w.png',
      title: 'US Residential Market Is Cooling. It\'s Time to Pivot Toward Public and Infrastructure Work',
      description: 'The housing boom is slowing down. Mortgage rates are high, starts are down, and contractors who relied on residential work are looking bad news. Public-sector infrastructure projects are.',
    }
  ];

  return (
    <section className="industry-news">
      <div className="news-container">
        <h2 className="news-main-title">INDUSTRY NEWS & INSIGHTS</h2>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <div key={article.id} className="news-card">


              <div className="news-illustration">

                <div className="lightbulb-icon">
                  <img src={article.image} alt="" srcset="" />
                </div>

              </div>

              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-description">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-button-container">
          <Button  text={"See More Blogs"}/>
          {/* <button className="see-more-btn">See More Blogs</button> */}
        </div>
      </div>
    </section>
  );
};

export default IndustryNews;