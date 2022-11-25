import React from "react";
import heart from "../../resources/images/heart.png"
import { HamburgerMenu } from "./hamburgerMenu";
import SectionsStrings from "../../utils/enums";
import "./Navbar.css"

interface NavbarProps {
  scrollToSection: (element: SectionsStrings) => void
};

export default function Navbar({ scrollToSection }: NavbarProps) {

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div className="logo" onClick={() => scrollToSection("LANDING")}>Olivia <br/> Olaya</div>
        <img className="heart" src={heart} alt="heart" />
      </div>
      <div className="nav-links-container">
        <div className="nav-link" onClick={() => scrollToSection("PORTFOLIO")}>
          Portfolio
        </div>
        <div className="nav-link" onClick={() => scrollToSection("ABOUT")}>
          AboutMe
        </div>
        <div className="nav-link" onClick={() => scrollToSection("CONTACT")}>
          Contact
        </div>
      </div>
      <div className="nav-menu-container">
        <HamburgerMenu scrollToSection={scrollToSection}/>
      </div>
    </div>
  );
}
