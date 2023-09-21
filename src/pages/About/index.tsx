/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { NavContext, NavState } from "providers/NavProvider";
import classNames from "classnames";

import { AboutMe } from "./AboutMe";
import { Services } from "./Services";

import { Testimonials } from "./Testimonials";
import { Clients } from "./Clients";

const About: React.FC = () => {
  const { navState } = useContext(NavContext);

  return (
    <article
      className={classNames("about", {
        active: navState === NavState.ABOUT,
      })}
      data-page="about"
    >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <AboutMe />

      <Services />

      <Testimonials />

      <Clients />
    </article>
  );
};

export default About;
