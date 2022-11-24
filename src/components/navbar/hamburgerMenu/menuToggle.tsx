import { motion } from "framer-motion";
import React from "react";
import "./HamburgerMenu.css"

interface MenuToggleProps {
  toggle: () => void,
  isOpen: boolean
};

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <div className="menu-toggle-container" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 100%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 100%)" },
          }}
          transition={transition}
        />
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 100%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 100%)" },
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
}
