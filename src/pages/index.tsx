import * as React from "react"
import { RefObject, useRef } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Landing from "../components/sections/Landing"
import AboutMe from "../components/sections/AboutMe"
import Portfolio from "../components/sections/Portfolio"
import Contact from "../components/sections/Contact/Contact"
import ScrollToTop from "../components/scrollToTop"
import "./index.css"

const IndexPage: React.FC<PageProps> = () => {
  const portfolio = useRef<HTMLDivElement>(null);
  const aboutMe = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main className="site-container">
      <ScrollToTop/>
      <Navbar/>
      {/* <ul>
          <li onClick={() => scrollToSection(portfolio)} className="link">
            Portfolio
          </li>
          <li onClick={() => scrollToSection(aboutMe)} className="link">
            AboutMe
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Contact
          </li>
      </ul> */}
      <Landing/>
      <div ref={portfolio}>
        <Portfolio/>
      </div>
      <div ref={aboutMe}>
        <AboutMe/>
      </div>
      <div ref={contact}>
        <Contact/>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Olivia Olaya</title>
