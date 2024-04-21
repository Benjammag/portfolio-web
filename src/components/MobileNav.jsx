import React from "react";
import "./MobileNav.css";
// import { FaBars } from "react-icons/fa";

function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={"mobile-menu-container"}>
          <div className="logo">
            <h1 className="title">Benjamin Agbetuyi</h1>
          </div>

          <ul>
            <li>
              <a className="menu-item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact Me
              </a>
            </li>

            <a className="hire-me" href="#contact-form">
              <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
