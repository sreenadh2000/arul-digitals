import React, { useState, useRef, useEffect } from "react";
import { Clock, Award, Users, Truck, Shield, Star } from "lucide-react";

function Impacts() {
  const impactItems = [
    {
      icon: <Clock size={40} />,
      title: "Fast Turnaround",
      description:
        "Quick delivery times without compromising on quality. Same-day printing available for urgent orders.",
    },
    {
      icon: <Award size={40} />,
      title: "Premium Quality",
      description:
        "State-of-the-art printing technology ensuring crisp, vibrant, and professional results every time.",
    },
    {
      icon: <Users size={40} />,
      title: "Expert Team",
      description:
        "Experienced professionals dedicated to bringing your vision to life with precision and care.",
    },
    {
      icon: <Truck size={40} />,
      title: "Reliable Delivery",
      description:
        "Secure packaging and timely delivery to ensure your prints arrive in perfect condition.",
    },
    {
      icon: <Shield size={40} />,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with a satisfaction guarantee on all printing services.",
    },
    {
      icon: <Star size={40} />,
      title: "Customer Satisfaction",
      description:
        "Over 10,000 satisfied customers trust us for their printing needs across various industries.",
    },
  ];

  return (
    <section className="impact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Arul Digitals Prints Impact</h2>
        </div>

        <div className="row">
          {impactItems.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
              <div className="impact-item">
                <div className="impact-icon">{item.icon}</div>
                <div className="impact-content">
                  <h3 className="impact-title">{item.title}</h3>
                  <p className="impact-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impacts;
