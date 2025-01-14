import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import React from "react";
import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <BsBookmarkStarFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("services")}
        className={activeNav === "services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessage />
      </a>
    </nav>
  );
}
