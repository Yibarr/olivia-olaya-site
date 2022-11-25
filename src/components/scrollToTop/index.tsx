import React, { useState, useEffect } from "react";
import heart from "../../resources/images/heart.png"
import "./scrollToTop.css"

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  return (
    <div>
      {showScrollTopButton && (
        <div
          className="top-btn-container"
          onClick={scrollTop}
        >
          <img
            src={heart}
            alt="Heart"
            className="top-btn-img"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;