/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from "classnames";
import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { NavContext, NavState } from "providers/NavProvider";

import { FilterBox } from "./FilterBox";
import { Category, portfolios } from "data/portfolio";

const Portfolio: React.FC = () => {
  const { navState } = useContext(NavContext);
  const [category, setCategory] = useState<Category>(Category.ALL);

  return (
    <article
      className={classNames("portfolio", {
        active: navState === NavState.PORTFOLIO,
      })}
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <FilterBox category={category} setCategory={setCategory} />

        <ul className="project-list">
          {portfolios.map((portfolio, i) => (
            <li
              className={classNames("project-item", {
                active: [Category.ALL, ...portfolio.category].includes(category),
              })}
              data-filter-item
              key={`portfolio-${i}`}
            >
              <a href={portfolio.url} target="_blank" rel="noreferrer">
                <figure className="project-img" style={{ height: "200px" }}>
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src={portfolio.photos[0]}
                    alt="finance"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                </figure>

                <h3 className="project-title">{portfolio.project}</h3>

                <p className="project-category">{portfolio.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
