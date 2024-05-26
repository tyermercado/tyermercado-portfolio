import React, { useState, useEffect } from "react";
import "./nav.css";
import { BiHome, BiUser, BiCodeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import ThemeToggle from "../theme/Theme";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Check which section is currently in view
    // const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("experience");
    const portfolioSection = document.getElementById("portfolio");
    const contactSection = document.getElementById("contact");

    if (
      scrollPosition < aboutSection.offsetTop - 100 ||
      scrollPosition >= contactSection.offsetTop + contactSection.offsetHeight - 100
    ) {
      setActiveNav("#home");
    } else if (
      scrollPosition >= aboutSection.offsetTop - 100 &&
      scrollPosition < experienceSection.offsetTop - 100
    ) {
      setActiveNav("#about");
    } else if (
      scrollPosition >= experienceSection.offsetTop - 100 &&
      scrollPosition < portfolioSection.offsetTop - 100
    ) {
      setActiveNav("#experience");
    } else if (
      scrollPosition >= portfolioSection.offsetTop - 100 &&
      scrollPosition < contactSection.offsetTop - 100
    ) {
      setActiveNav("#portfolio");
    } else if (
      scrollPosition >= contactSection.offsetTop - 100 &&
      scrollPosition > portfolioSection.offsetTop + 100
    ){
      setActiveNav("#contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav">
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiCodeAlt />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
     
      <ThemeToggle />

    </nav>
  );
};

export default Nav;


