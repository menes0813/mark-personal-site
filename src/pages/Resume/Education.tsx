import { IonIcon } from "@ionic/react";
import { educations } from "data/resume";
import { bookOutline } from "ionicons/icons";
import React from "react";

export const Education: React.FC = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">
        {educations.map((college, i) => (
          <li className="timeline-item" key={`colleage-${i}`}>
            <h4 className="h4 timeline-item-title">
              {college.name}
            </h4>

            <span>{college.duration}</span>

            <p className="timeline-text">{college.major}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
