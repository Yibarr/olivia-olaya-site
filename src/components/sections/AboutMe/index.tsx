import React, { useRef, useState } from "react";
import OliviaOlaya from "../../../resources/images/OliviaOlaya.jpeg"
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div className="about-section">
      <div className="about-me-container">
        <div className="about-me">
          <h2 className="olivia-name-title">
              Erica Olivia Pérez Olaya
          </h2>
          <p>
          Recognized as an artist under the name of Olivia Olaya.  She was born in Mexico City in 1998. She graduated with a degree in Visual Arts from the Faculty of Arts and Design (FAD) and she’s currently doing a Google certification through Coursera in UX Design.
          </p>
        </div>
        <div className="img-container">
          <img className="olivia-img" src={OliviaOlaya} alt="Olivia Olaya" />
        </div>
      </div>
    </div>
  );
}
