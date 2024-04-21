import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
import "./Navbar.css";
import { FaBars, FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div id="home" className="logo">
            <h1 className="title">Benjamin Agbetuyi</h1>
          </div>
          <ul>
            <li>
              <a href="/" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
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

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <FaWindowClose /> : <FaBars />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
