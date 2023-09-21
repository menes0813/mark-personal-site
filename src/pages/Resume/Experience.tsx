import { IonIcon } from "@ionic/react";
import { experiences } from "data/resume";
import { bookOutline } from "ionicons/icons";
import React from "react";

export const Experience: React.FC = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
        {experiences.map((experience, i) => (
          <li className="timeline-item" key={`experience-${i}`}>
            <h4 className="h4 timeline-item-title">{experience.title}</h4>

            <span>{experience.duration}</span>

            {experience.description.split("\n").map((item, i) => (
              <p className="timeline-text" key={`item-${i}`}>
                {item}
              </p>
            ))}
          </li>
        ))}
      </ol>
    </section>
  );
};
