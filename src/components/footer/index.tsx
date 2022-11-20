import React from "react";
import "./Footer.css"

export default function Footer() {
  const currentYear: number = new Date().getFullYear()
  return (
    <div className="footer-container">
        <h3>
            Olivia<br/> Olaya
        </h3>
        <h3 className="footer-year">
          { currentYear }
        </h3>
    </div>
  );
}
