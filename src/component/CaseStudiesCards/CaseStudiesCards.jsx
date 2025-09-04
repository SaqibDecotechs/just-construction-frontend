import React from "react";
import "./CaseStudiesCards.css";

const cardsData = [
    {
        title: "Construction Jobs",
        description:
            "Step into the core of the construction industry with roles that cover project management, site supervision, and general contracting. Perfect for those who thrive in fast-paced environments where no two days are the same.",
        image:
            "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg", // construction site
    },
    {
        title: "Electrical Jobs",
        description:
            "From residential wiring to large-scale commercial projects, our electrical vacancies are tailored for individuals who enjoy working with precision and ensuring safety standards are met every step of the way.",
        image:
            "https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg", // electrician
    },
    {
        title: "Carpentry Jobs",
        description:
            "Explore opportunities in joinery and woodwork where craftsmanship meets creativity. Whether it’s interiors, furniture, or large installations, these roles suit detail-oriented professionals with a passion for design.",
        image:
            "https://images.pexels.com/photos/3536424/pexels-photo-3536424.jpeg", // carpentry
    },
    {
        title: "Roofing Jobs",
        description:
            "Play a vital role in structural integrity and protection by joining our roofing specialists. These positions focus on installation, repair, and maintenance, ensuring buildings remain safe and weatherproof.",
        image:
            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80", // roofing
    },
    {
        title: "Mechanical & HVAC Jobs",
        description:
            "Dive into technical roles in heating, ventilation, and air conditioning. Perfect for engineers and technicians who enjoy working with advanced systems that improve comfort and sustainability in buildings.",
        image:
            "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg", // hvac
    },
    {
        title: "Drywall Jobs",
        description:
            "Bring interiors to life with precision drywall installation and finishing. These roles are ideal for individuals skilled in transforming raw spaces into polished, functional, and professional environments.",
        image:
            "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg", // drywall
    },
];

const CaseCardsSection = () => {
    return (
        <section className="cards-section">
            <div className="cards-grid">
                {cardsData.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseCardsSection;
