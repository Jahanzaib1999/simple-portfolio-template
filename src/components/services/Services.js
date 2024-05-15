import "./Services.css";

import { ImCheckmark } from "react-icons/im";

import React from "react";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>MOBILE APP DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <ImCheckmark className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
