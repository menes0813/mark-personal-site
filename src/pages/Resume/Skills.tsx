import { skills } from "data/resume";
import React from "react";

export const Skills: React.FC = () => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">
        {skills.map((skill, i) => (
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{skill.skill}</h5>
              <data value={`${skill.percentage}`}>{skill.percentage}%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
