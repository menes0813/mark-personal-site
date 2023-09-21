import portfolioNoumena from "assets/images/portfolio-noumena.png";
import portfolioNoumenaMobile from "assets/images/portfolio-noumena-app.png";
import portfolioFullton from "assets/images/portfolio-fulton.png";
import portfolioMetricFire from "assets/images/portfolio-metricfire-1.png";


export enum Category {
  ALL = "All",
  WEB_DEVELOPMENT = "Web Development",
  MOBILE_APPLICATOIN = "Mobile Applications",
  Frontend = "Frontend",
  Backend = "Backend",
}

export const portfolios = [
  {
    project: "Noumena",
    description:
      "Noumena is a global company building the most powerful and useful platform for freelancers focused on taking their businesses to the next level. We provide access to a suite of business tools, financial capital, expert guidance, and community support that's been sorely needed for decades.",
    photos: [portfolioNoumena],
    url: "https://app.noumena.pro/",
    category: [Category.WEB_DEVELOPMENT],
  },
  {
    project: "Noumena (Mobile)",
    description:
      "Noumena is a global company building the most powerful and useful platform for freelancers focused on taking their businesses to the next level. We provide access to a suite of business tools, financial capital, expert guidance, and community support that's been sorely needed for decades.",
    photos: [portfolioNoumenaMobile],
    url: "https://apps.apple.com/us/app/noumena-for-freelancers/id1531422690",
    category: [Category.MOBILE_APPLICATOIN],
  },
  {
    project: "MetricFire",
    description:
      "MetricFire is a complete application and infrastructure monitoring platform built on hosted versions of Graphite and Grafana.",
    photos: [portfolioMetricFire],
    url: "https://www.metricfire.com/",
    category: [Category.WEB_DEVELOPMENT],
  },
  {
    project: "Fulton",
    description:
      "Fulton Works offers expedited product development and design work for a reduced rate to startups in exchange for equity or a convertible note.",
    photos: [portfolioFullton],
    url: "http://fultonworks.co/",
    category: [Category.WEB_DEVELOPMENT],
  },
];
