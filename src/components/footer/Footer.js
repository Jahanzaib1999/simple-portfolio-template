import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jahan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Jahanzeb Khan. All rights reserved</small>
      </div>
    </footer>
  );
}
