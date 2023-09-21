import { summary } from "data/about";
import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <section className="about-text">
      {summary.map((line, i) => (
        <p key={`about-${i}`}>{line}</p>
      ))}
    </section>
  );
};
