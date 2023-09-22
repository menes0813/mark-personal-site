import { techSkills } from "data/tech-skills";
import React from "react";

export const Skills: React.FC = () => {
  return (
    <section className="tech-skills">
      <h3 className="h3 tech-skills-title">Skills</h3>

      <h5 className="h5 tech-skills-title">Languages</h5>
      <ul className="tech-skills-list has-scrollbar">
        {techSkills.languagues.map((language, i) => (
          <li className="tech-skills-item" key={`language-${i}`}>
            <img src={language} alt="client logo" />
          </li>
        ))}
      </ul>

      <h5 className="h5 tech-skills-title">Frameworks</h5>
      <ul className="tech-skills-list has-scrollbar">
        {techSkills.frameworks.map((framework, i) => (
          <li className="tech-skills-item" key={`framework-${i}`}>
            <img src={framework} alt="client logo" />
          </li>
        ))}
      </ul>

      <h5 className="h5 tech-skills-title">Databases</h5>
      <ul className="tech-skills-list has-scrollbar">
        {techSkills.databases.map((database, i) => (
          <li className="tech-skills-item" key={`database-${i}`}>
            <img src={database} alt="client logo" />
          </li>
        ))}
      </ul>

      <h5 className="h5 tech-skills-title">Cloud Services</h5>
      <ul className="tech-skills-list has-scrollbar">
        {techSkills.cloudServices.map((cloudservice, i) => (
          <li className="tech-skills-item" key={`cloudservice-${i}`}>
            <img src={cloudservice} alt="client logo" />
          </li>
        ))}
      </ul>

      <h5 className="h5 tech-skills-title">Others</h5>
      <ul className="tech-skills-list has-scrollbar">
        {techSkills.others.map((other, i) => (
          <li className="tech-skills-item" key={`other-${i}`}>
            <img src={other} alt="client logo" />
          </li>
        ))}
      </ul>
    </section>
  );
};
