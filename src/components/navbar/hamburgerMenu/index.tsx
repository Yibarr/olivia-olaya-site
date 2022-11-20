import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./menu";
import "./HamburgerMenu.css"

const HamburgerIcon = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const IconContainer = styled.div`
  font-size: 16px;
  color: #FFF;
  padding-right: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

export function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navbar-menu-container">
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
          <IconContainer>
            <HamburgerIcon/>
          </IconContainer>
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </div>
  );
}
