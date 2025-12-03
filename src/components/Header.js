import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

export default function Header() {
  const [hide, setHide] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > prevScroll && current > 100) {
        setHide(true);
      } else {
        setHide(false);
      }

      setPrevScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header className={hide ? "hide-header" : ""}>
      <div className="header-container">
        <div className="logo">Muskan.dev</div>

        <nav>
          <Link to="landing" smooth duration={600}>Home</Link>
          <Link to="projects" smooth duration={600}>Projects</Link>
          <Link to="contact" smooth duration={600}>Contact</Link>
        </nav>

        <div className="socials">
          <a href="https://linkedin.com/in/muskan-akram" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/muskan-akram" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </header>
  );
}
