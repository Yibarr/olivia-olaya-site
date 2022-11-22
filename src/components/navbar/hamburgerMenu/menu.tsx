import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import SectionsStrings from "../../../utils/enums";

const NavLink = styled(motion.li)`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FFF;
  font-weight: 200;
  font-size: 2rem;
  line-height: 1.5rem;

  &:hover {
    background-color: #FE9E8E;
    color: #E12828;
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

interface NavMenuProps {
  isOpen: boolean,
  scrollToSection: (element: SectionsStrings) => void,
  toggle: () => void
};

export function NavMenu({ isOpen, scrollToSection, toggle }: NavMenuProps) {

  const selectMenuItem = (element: SectionsStrings) => {
    scrollToSection(element)
    toggle()
  }

  return (
    <div className="menu-container">
      <ul className="menu-list">
        <NavLink
          onClick={() => selectMenuItem("LANDING")}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <div>Landing</div>
        </NavLink>
        <NavLink
          onClick={() => selectMenuItem("PORTFOLIO")}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          Portfolio
        </NavLink>
        <NavLink
          onClick={() => selectMenuItem("ABOUT")}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          About me
        </NavLink>
        <NavLink
          onClick={() => selectMenuItem("CONTACT")}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
