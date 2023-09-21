import serviceBusinessImage from "assets/images/service-business.png";
import serviceArchitectureImage from "assets/images/service-architecture.png";
import serviceFrontendImage from "assets/images/service-frontend.png";
import serviceBackendImage from "assets/images/service-backend.png";
import serviceIntegrationImage from "assets/images/service-integration.png";
import serviceScheduleImage from "assets/images/service-schedule.png";

import clientAvatar1 from "assets/images/client-brent.jpeg";
import clientAvatar2 from "assets/images/client-andre.jpeg";
import clientAvatar3 from "assets/images/client-elliot.jpeg";

import clientLogo1 from "assets/images/logo-noumena.png";
import clientLogo2 from "assets/images/logo-skipforce.jpeg";
import clientLogo3 from "assets/images/logo-desertsoftware.png";
import clientLogo4 from "assets/images/logo-datemine.png";
import clientLogo5 from "assets/images/logo-mycashless.jpeg";
import clientLogo6 from "assets/images/logo-fultonwork.png";
import clientLogo7 from "assets/images/logo-metricfire.jpeg";

export const summary = [
  "Hi. I provide web development services for startups, and small and medium-sized enterprises. I have worked on tens of challenging projects and looking for more opportunity.",
  "As a full-stack developer, I can do all but my greatest experience is with API Development. (REST & GraphQL).",
  "I also have built many single page applications in React, Next.js, and Angular frameworks.",
  "I help worldwide customers from various business with my coding, building a core team, and providing best-matching solutions.",
];

export const services = [
  {
    subject: "Business analysis",
    description:
      "I focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. I also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.",
    image: serviceBusinessImage,
  },
  {
    subject: "Architecture",
    description: "I will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full. I will also map all API connections within the web solution and with outside systems.",
    image: serviceArchitectureImage,
  },
  {
    subject: "Front-end development",
    description: "I can implement any design idea and ensure all interface elements work properly. I work with all most-used JavaScript frameworks, such as Angular, React, and Next.",
    image: serviceFrontendImage,
  },
  {
    subject: "Back-end development",
    description: "I accurately implement the business logic of your web app on the back end. I rely on proven frameworks and ensure fast and quality coding in Python, Node.js, and PHP.",
    image: serviceBackendImage,
  },
  {
    subject: "Integration",
    description: "I set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems.",
    image: serviceIntegrationImage,
  },
  {
    subject: "Continuous support and evolution",
    description: "I advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs.",
    image: serviceScheduleImage,
  },
];

export const testimonials = [
  {
    name: "Brent Sanders",
    company: "Fultonwork - CTO",
    feedback:
      "Mark is a unique find on UpWork. He is a strong communicator but also incredibly diligent and self-driven. We engaged Mark's help on a large codebase that had many issues to be addressed. He worked carefully and methodically each week on the project and always advanced and improved the code as he went. Mark does great work and would be a valuable asset to any team.",
    photo: clientAvatar1,
  },
  {
    name: "Andre Lee",
    company: "Noumena - CEO",
    feedback:
      "Mark delivered good work on this project and our entire team enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were strong. He helped us find additional freelancers to support the work. We enjoyed working with Mark and will likely have additional jobs for him in the future.",
    photo: clientAvatar2,
  },
  {
    name: "Elliot Langston",
    company: "MetricFire - General Manager",
    feedback: "Mark was very quick, skilled, and easy to communicate with. He is a weapon in python and CI/CD - do not hesitate to hire him, I know that I will be doing so for future projects!",
    photo: clientAvatar3,
  },
];

export const clients = [
  { logo: clientLogo1, url: "https://app.noumena.pro/" },
  { logo: clientLogo7, url: "https://www.metricfire.com/" },
  // { logo: clientLogo5, url: "https://mycashless.com/" },
  { logo: clientLogo6, url: "https://resources.istcoalition.org/fulton-works" },
  // { logo: clientLogo2, url: "https://skipforce.com/" },
  // { logo: clientLogo3, url: "https://www.desertsoftware.com.au/" },
  { logo: clientLogo4, url: "https://staging-app.datareporter.com" },
];
