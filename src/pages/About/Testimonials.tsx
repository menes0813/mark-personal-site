import { IonIcon } from "@ionic/react";
import classNames from "classnames";
import { testimonials } from "data/about";
import { closeOutline } from "ionicons/icons";
import React, { useState } from "react";

import iconQuote from "assets/images/icon-quote.svg"

type Testimonial = {
  name: string;
  company: string;
  feedback: string;
  photo: string;
};

export const TestimonialModal: React.FC<{
  show: boolean;
  testimonial?: Testimonial;
  onClose: () => void;
}> = ({ show, testimonial, onClose }) => {
  return (
    <div
      className={classNames("modal-container", { active: show })}
      data-modal-container
    >
      <div
        className={classNames("overlay", { active: show })}
        data-overlay
      ></div>

      <section className="testimonials-modal">
        <button
          className="modal-close-btn"
          data-modal-close-btn
          onClick={onClose}
        >
          <IonIcon icon={closeOutline} />
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src={testimonial?.photo}
              alt={testimonial?.name}
              width="80"
              data-modal-img
            />
          </figure>

          <img src={iconQuote} alt="quote icon" />
        </div>

        <div className="modal-content">
          <h3 className="h3 modal-title" data-modal-title>
            {testimonial?.name}
            <h5 className="h5">{testimonial?.company}</h5>
          </h3>

          <div data-modal-text>
            <p>{testimonial?.feedback}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [testimonial, setTestimonial] = useState<Testimonial>();

  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, i) => (
            <li
              className="testimonials-item"
              key={`testimonial-${i}`}
              onClick={() => {
                setTestimonial(testimonial);
                setShow(true);
              }}
            >
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.photo}
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {testimonial.name}{" "}
                  <span className="h5">{testimonial.company}</span>
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.feedback}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <TestimonialModal
          show={show}
          testimonial={testimonial}
          onClose={() => setShow(false)}
        />
      </section>
    </>
  );
};
