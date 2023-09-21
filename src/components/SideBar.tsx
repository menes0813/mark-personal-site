import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  chevronDown,
  locationOutline,
  logoGithub,
  mailOutline,
  phonePortraitOutline,
} from "ionicons/icons";
import React from "react";

import { personalInfo } from "data/personal-info";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={personalInfo.photo} alt={personalInfo.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name">
            {personalInfo.name}
          </h1>

          <p className="title">{personalInfo.title}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                {personalInfo.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${personalInfo.phone}`} className="contact-link">
                {personalInfo.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime={personalInfo.dob}>{personalInfo.dob}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{personalInfo.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={personalInfo.github} className="social-link" target="blank">
              <IonIcon icon={logoGithub} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
