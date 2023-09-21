import { services } from "data/about";
import React from "react";

export const Services: React.FC = () => {
  return (
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
        {services.map((service, i) => (
          <li className="service-item" key={`service-${i}`}>
            <div className="service-icon-box">
              <img src={service.image} alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.subject}</h4>

              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
