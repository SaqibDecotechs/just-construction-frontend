import React, { useEffect, useState } from "react";
import { FaArrowUp, FaAward } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./Aboutcounter.css";

const countersData = [
  {
    id: 1,
    value: 8,
    suffix: "",
    label: "Candidates Placed so far this year",
    icon: <FaArrowTrendUp size={28} />,
  },
  {
    id: 2,
    value: 38,
    suffix: "%",
    label: "Year on Year Growth",
    icon: <FaArrowTrendUp  size={28} />,
  },
  {
    id: 3,
    value: 16,
    suffix: "",
    label: "Number of Employees",
    icon: <FaAward size={28} />,
  },
  {
    id: 4,
    value: 100,
    suffix: "",
    label: "Combined Years of experience",
    icon: <FaArrowTrendUp size={28} />,
  },
];

const CounterSection = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(countersData.map(() => 0));


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(".counter-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // animation logic
  useEffect(() => {
    if (visible) {
      countersData.forEach((counter, index) => {
        let start = 0;
        const end = counter.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, 16);
      });
    }
  }, [visible]);

  return (
    <section className="counter-section">
      <div className="counter-grid">
        {countersData.map((counter, index) => (
          <div key={counter.id} className="counter-card">
            <h2 className="counter-value">
              {counts[index]}
              {counter.suffix}
            </h2>
            <div className="counter-line"></div>
            <div className="counter-icon">{counter.icon}</div>
            <p className="counter-label">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
