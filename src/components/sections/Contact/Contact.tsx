import React, { ReactElement } from "react";
import dribbble from "../../../resources/images/dribbble.png"
import behance from "../../../resources/images/behance.png"
import twitter from "../../../resources/images/twitter.png"
import linkedin from "../../../resources/images/linkedin.png"
import medium from "../../../resources/images/medium.png"
import "./Contact.css"

const images = [
  {
    src: twitter,
    alt: "twitter",
    href: "https://twitter.com/Olita_Del_Mar"
  },
  {
    src: linkedin,
    alt: "linkedin",
    href: "https://www.linkedin.com/in/olivia-olaya-259196205/"
  },
  {
    src: dribbble,
    alt: "dribble",
    href: "https://dribbble.com/Olita_del_Mar"
  },
  {
    src: behance,
    alt: "behance",
    href: "https://www.behance.net/Olivia_Olaya"
  },
  {
    src: medium,
    alt: "medium",
    href: "https://medium.com/@ooliithebest"
  },
]

export default function Contact() {
  return (
    <div className="contact-container">
        <div className="contact-title">
            Contact
        </div>
        <div className="social-networks-container">
          {
            images.map(element => {
              return (
                <a
                  href={element.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className ="social-network-icon"
                    src={element.src}
                    alt={element.alt}
                    key={element.alt}
                  />
                </a>
              )
            })
          }
        </div>
    </div>
  );
}
