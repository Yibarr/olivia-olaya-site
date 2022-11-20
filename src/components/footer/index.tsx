import React from "react";
import "./Footer.css"

export default function Footer() {
  const currentYear: number = new Date().getFullYear()
  return (
    <div className="footer-container">
        <h3>
            Olivia Olaya { currentYear }
        </h3>
    </div>
  );
}
