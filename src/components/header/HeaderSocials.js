import React from "react";
import "./Header.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
}
