import React from "react";
import "./IndustryNews.css";
import ind1 from '../../assest/ind1.jpeg';
import ind2 from '../../assest/ind2.jpeg';
import ind3 from '../../assest/ind3.jpeg';

const blogData = [
  {
    id: 1,
    title: "Prefab & Off-Site: The Future of Construction Hiring",
    content:
      "Off-site and modular building are no longer side options — they’re becoming the standard across schools, healthcare, housing, and data centres in both the UK and US. For employers, it’s not just about faster builds — it’s a smarter hiring strategy.",
    image: ind1,
  },
  {
    id: 2,
    title: "AI & Data Centres: Powering the Next Construction Talent Wave",
    content:
      "The AI revolution isn’t limited to the digital world. Data centres are rising at record speed, creating a surge in demand for skilled trades and innovative labour strategies across the UK and US.",
    image: ind2,
  },
  {
    id: 3,
    title: "Automation on Site: How Robots Empower Skilled Workers",
    content:
      "Robots aren’t replacing the workforce — they’re enhancing it. In the UK and US, automation is helping firms deliver projects faster, reduce injuries, and keep their teams competitive.",
    image: ind3,
  },
];

const IndustryNews = () => {
  return (
    <div className="industry-section">
      <h2 className="section-title">Industry news & insights</h2>
      <div className="news-grid">
        {blogData.map((blog) => (
          <div key={blog.id} className="news-card">
            <div className="image-wrapper">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="news-content">
              <h3 className="news-title">{blog.title}</h3>
              <p className="news-excerpt">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more">
        <button className="see-more-btn">See More Blogs</button>
      </div>
    </div>
  );
};

export default IndustryNews;
