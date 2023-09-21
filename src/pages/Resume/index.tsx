import classNames from "classnames";
import { NavContext, NavState } from "providers/NavProvider";
import React, { useContext } from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

const Resume: React.FC = () => {
  const { navState } = useContext(NavContext);

  return (
    <article
      className={classNames("resume", {
        active: navState === NavState.RESUME,
      })}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <Education />

      <Experience />

      <Skills />
    </article>
  );
};

export default Resume;
