import React from "react";
import "./Footer.css"

export default function Footer() {
  const currentYear: number = new Date().getFullYear()
  return (
    <div className="footer-container">
        <div>
            Olivia<br/> Olaya
        </div>
        <div className="footer-year">
          { currentYear }
        </div>
    </div>
  );
}
